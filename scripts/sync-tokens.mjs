#!/usr/bin/env node

import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dir     = dirname(fileURLToPath(import.meta.url));
const TOKEN_DIR = resolve(__dir, '../projects/klini-ds/src/lib/tokens');
const FILE_KEY  = process.env.FIGMA_FILE ?? 'gOsRuHIPm6Xo5zGEWDmnRW';
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;

if (!FIGMA_TOKEN) {
  console.error('❌  FIGMA_TOKEN não definido. Exemplo:\n   FIGMA_TOKEN=figd_xxxx node scripts/sync-tokens.mjs');
  process.exit(1);
}


const toByte = (v) => Math.round(v * 255);

function toHex({ r, g, b }) {
  return '#' + [r, g, b].map(v => toByte(v).toString(16).padStart(2, '0')).join('').toUpperCase();
}

const toCssVar = (name) => '--klini-' + name.replace(/\//g, '-').toLowerCase();

const fileHeader = (title, description) => `// ${'='.repeat(77)}
// Klini DS — ${title}
// ${description}
// Gerado automaticamente por scripts/sync-tokens.mjs — NÃO editar manualmente
// ${'='.repeat(77)}
`;


async function fetchVariables() {
  const url = `https://api.figma.com/v1/files/${FILE_KEY}/variables/local`;
  console.log('📡  Buscando variáveis do Figma…');
  const res = await fetch(url, { headers: { 'X-Figma-Token': FIGMA_TOKEN } });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Figma API ${res.status}: ${text}`);
  }
  const data = await res.json();
  return data.meta ?? data; // REST API v1 retorna { meta: { variables, variableCollections } }
}


function buildIdMap(variables) {
  const map = {};
  for (const [id, v] of Object.entries(variables)) {
    map[id] = v.name;
  }
  return map;
}

function resolveValue(rawValue, idMap) {
  if (rawValue && typeof rawValue === 'object') {
    if (rawValue.type === 'VARIABLE_ALIAS') {
      const refName = idMap[rawValue.id];
      return refName ? `var(${toCssVar(refName)})` : null;
    }
    if ('r' in rawValue) return toHex(rawValue);
  }
  return rawValue;
}


function generateRootBlock(variables, collectionIds, idMap, unitFn = null) {
  const lines = [];

  for (const v of Object.values(variables)) {
    if (!collectionIds.includes(v.variableCollectionId)) continue;

    const modeId   = Object.keys(v.valuesByMode)[0];
    const rawValue = v.valuesByMode[modeId];
    let value      = resolveValue(rawValue, idMap);

    if (value === null || value === undefined) continue;

    if (unitFn) value = unitFn(v.name, value);

    lines.push(`  ${toCssVar(v.name)}: ${value};`);
  }

  return lines.join('\n');
}

function primitiveUnit(name, value) {
  if (typeof value !== 'number') return value;
  const noPx = ['opacity', 'z/', 'duration', 'easing', 'grid/columns', 'grid/max'];
  if (noPx.some(p => name.includes(p))) return value;
  if (value === 0) return '0px';
  return `${value}px`;
}

function scaleUnit(name, value) {
  if (typeof value !== 'number') return value;
  const noPx = ['grid/columns', 'opacity', 'z/'];
  if (noPx.some(p => name.includes(p))) return value;
  if (value === 0) return '0px';
  return `${value}px`;
}


function groupedPrimitiveBlock(variables, collectionIds) {
  const groups = {};

  for (const v of Object.values(variables)) {
    if (!collectionIds.includes(v.variableCollectionId)) continue;

    const modeId   = Object.keys(v.valuesByMode)[0];
    const rawValue = v.valuesByMode[modeId];
    let value;

    if (rawValue && typeof rawValue === 'object' && 'r' in rawValue) {
      value = toHex(rawValue);
    } else if (typeof rawValue === 'number') {
      value = primitiveUnit(v.name, rawValue);
    } else {
      value = rawValue; // string (easing)
    }

    const group = v.name.split('/')[0];
    if (!groups[group]) groups[group] = [];
    groups[group].push(`  ${toCssVar(v.name)}: ${value};`);
  }

  return Object.entries(groups)
    .map(([group, lines]) => `  // ${group.toUpperCase()}\n${lines.join('\n')}`)
    .join('\n\n');
}


async function main() {
  const { variables, variableCollections } = await fetchVariables();
  const idMap = buildIdMap(variables);

  const collectionByName = {};
  for (const col of Object.values(variableCollections)) {
    collectionByName[col.name] = col.id;
  }

  const primId = collectionByName['01 · Primitive'];
  const primitiveBody = groupedPrimitiveBlock(variables, [primId]);

  const primitiveFile = `${fileHeader(
    'Primitive Tokens',
    'Coleção "01 · Primitive" — valores brutos: cores, espaços, radius, tipografia, motion'
  )}
:root {
${primitiveBody}
}
`;
  writeFileSync(`${TOKEN_DIR}/_primitive.scss`, primitiveFile, 'utf8');
  console.log('✅  _primitive.scss atualizado');

  const semId = collectionByName['02 · Semantic'];
  const semanticBody = generateRootBlock(variables, [semId], idMap);

  const semanticFile = `${fileHeader(
    'Semantic Tokens',
    'Coleção "02 · Semantic" — aliases semânticos (surface, text, border, action, feedback, field, overlay)'
  )}
:root {
${semanticBody}
}
`;
  writeFileSync(`${TOKEN_DIR}/_semantic.scss`, semanticFile, 'utf8');
  console.log('✅  _semantic.scss atualizado');

  const statusId = collectionByName['04 · Klini Status'];
  const statusBody = generateRootBlock(variables, [statusId], idMap);

  const statusFile = `${fileHeader(
    'Status Tokens',
    'Coleção "04 · Klini Status" — cores de status de guias/autorizações do domínio Klini'
  )}
:root {
${statusBody}
}
`;
  writeFileSync(`${TOKEN_DIR}/_status.scss`, statusFile, 'utf8');
  console.log('✅  _status.scss atualizado');

  const scaleId = collectionByName['05 · Scale'];
  const scaleBody = generateRootBlock(variables, [scaleId], idMap, scaleUnit);

  const scaleFile = `${fileHeader(
    'Scale Tokens',
    'Coleção "05 · Scale" — tamanhos de componentes, z-index, opacidade, breakpoints, grid'
  )}
:root {
${scaleBody}
}
`;
  writeFileSync(`${TOKEN_DIR}/_scale.scss`, scaleFile, 'utf8');
  console.log('✅  _scale.scss atualizado');

  console.log('\n🎨  Tokens sincronizados com sucesso!');
  console.log('   Próximo passo: git diff projects/klini-ds/src/lib/tokens/ para revisar as mudanças.');
}

main().catch(err => {
  console.error('❌ ', err.message);
  process.exit(1);
});
