import * as React from 'react'
import { ChevronRight, ChevronsUpDown, LogOut, Settings, type LucideIcon } from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

/* ── Types ──────────────────────────────────────────────────────────────── */

export interface KliniNavSubItem {
  title: string
  url: string
  badge?: string | number
  isActive?: boolean
}

export interface KliniNavItem {
  title: string
  url?: string
  icon?: LucideIcon
  isActive?: boolean
  badge?: string | number
  /** Sub-itens abrem como accordion colapsável */
  items?: KliniNavSubItem[]
}

export interface KliniNavGroup {
  /** Label do grupo (opcional — ex: "Principal", "Relatórios") */
  label?: string
  items: KliniNavItem[]
}

export interface KliniPortalUser {
  name: string
  email: string
  /** URL do avatar */
  avatar?: string
  role?: string
}

export interface KliniPortalLogo {
  /** Texto principal (nome do portal) */
  text: string
  /** Sub-texto (ex: versão, empresa) */
  subtext?: string
  /** URL de imagem da logo */
  src?: string
  /** Ícone Lucide como alternativa à imagem */
  icon?: LucideIcon
}

export interface KliniPortalShellProps {
  nav: { groups: KliniNavGroup[] }
  user?: KliniPortalUser
  logo?: KliniPortalLogo
  /** Breadcrumb do header — último item é a página atual */
  headerBreadcrumb?: Array<{ label: string; href?: string }>
  /** Ações extras no header (botões, search, etc.) */
  headerActions?: React.ReactNode
  children: React.ReactNode
  defaultOpen?: boolean
  onNavItemClick?: (url: string) => void
  onLogout?: () => void
  onSettings?: () => void
}

/* ── Shell principal ─────────────────────────────────────────────────────── */

/**
 * KliniPortalShell — layout completo de portal com sidebar colapsável.
 *
 * Baseado no padrão sidebar-08 do Shadcn/UI (new-york-v4).
 * Sidebar colapsa para modo ícones. Suporta navegação com grupos, sub-itens
 * accordion, badge de notificação e menu de usuário com dropdown.
 *
 * @example
 * <KliniPortalShell
 *   logo={{ text: 'Portal Beneficiário', subtext: 'Klini Saúde' }}
 *   nav={{ groups: [{ label: 'Principal', items: [...] }] }}
 *   user={{ name: 'Maria Silva', email: 'maria@empresa.com' }}
 *   headerBreadcrumb={[{ label: 'Home', href: '/' }, { label: 'Dashboard' }]}
 *   onLogout={() => signOut()}
 * >
 *   <Dashboard />
 * </KliniPortalShell>
 */
export function KliniPortalShell({
  nav,
  user,
  logo,
  headerBreadcrumb,
  headerActions,
  children,
  defaultOpen = true,
  onNavItemClick,
  onLogout,
  onSettings,
}: KliniPortalShellProps) {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <KliniAppSidebar
        nav={nav}
        user={user}
        logo={logo}
        onNavItemClick={onNavItemClick}
        onLogout={onLogout}
        onSettings={onSettings}
      />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          {headerBreadcrumb && headerBreadcrumb.length > 0 && (
            <>
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {headerBreadcrumb.map((item, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <BreadcrumbSeparator />}
                      <BreadcrumbItem>
                        {i < headerBreadcrumb.length - 1 && item.href ? (
                          <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                        ) : (
                          <BreadcrumbPage>{item.label}</BreadcrumbPage>
                        )}
                      </BreadcrumbItem>
                    </React.Fragment>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            </>
          )}
          {headerActions && (
            <div className="ml-auto flex items-center gap-2">{headerActions}</div>
          )}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:p-6">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}

/* ── Sidebar interna ─────────────────────────────────────────────────────── */

type AppSidebarProps = Pick<
  KliniPortalShellProps,
  'nav' | 'user' | 'logo' | 'onNavItemClick' | 'onLogout' | 'onSettings'
>

function KliniAppSidebar({ nav, user, logo, onNavItemClick, onLogout, onSettings }: AppSidebarProps) {
  const initials = user
    ? user.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()
    : ''

  return (
    <Sidebar collapsible="icon" variant="inset">
      {/* Logo / Team switcher */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="gap-3">
              {logo?.src ? (
                <img src={logo.src} alt={logo.text} className="h-8 w-8 rounded-lg object-contain" />
              ) : logo?.icon ? (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <logo.icon className="h-4 w-4" />
                </div>
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                  {(logo?.text ?? 'K')[0]}
                </div>
              )}
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{logo?.text ?? 'Klini'}</span>
                {logo?.subtext && (
                  <span className="truncate text-xs text-muted-foreground">{logo.subtext}</span>
                )}
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      {/* Navegação */}
      <SidebarContent>
        {nav.groups.map((group, gi) => (
          <SidebarGroup key={gi}>
            {group.label && <SidebarGroupLabel>{group.label}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) =>
                  item.items?.length ? (
                    <KliniCollapsibleItem
                      key={item.title}
                      item={item}
                      onNavItemClick={onNavItemClick}
                    />
                  ) : (
                    <KliniLeafItem
                      key={item.title}
                      item={item}
                      onNavItemClick={onNavItemClick}
                    />
                  ),
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Usuário */}
      {user && (
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg bg-primary/10 text-primary text-xs font-semibold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user.name}</span>
                      <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4 shrink-0 text-muted-foreground" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <div className="flex items-center gap-3 p-2">
                    <Avatar className="h-9 w-9 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="rounded-lg bg-primary/10 text-primary text-xs font-semibold">
                        {initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user.name}</span>
                      <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                      {user.role && (
                        <span className="truncate text-xs text-primary font-medium">{user.role}</span>
                      )}
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  {onSettings && (
                    <DropdownMenuItem onClick={onSettings}>
                      <Settings className="mr-2 h-4 w-4" />
                      Configurações
                    </DropdownMenuItem>
                  )}
                  {onLogout && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        onClick={onLogout}
                        className="text-destructive focus:bg-destructive/10 focus:text-destructive"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sair
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      )}

      <SidebarRail />
    </Sidebar>
  )
}

/* ── Nav items ───────────────────────────────────────────────────────────── */

function KliniLeafItem({
  item,
  onNavItemClick,
}: {
  item: KliniNavItem
  onNavItemClick?: (url: string) => void
}) {
  const inner = (
    <>
      {item.icon && <item.icon />}
      <span>{item.title}</span>
      {item.badge !== undefined && (
        <KliniNavBadge>{item.badge}</KliniNavBadge>
      )}
    </>
  )

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={item.title}
        isActive={item.isActive}
        onClick={() => item.url && onNavItemClick?.(item.url)}
        asChild={!!item.url}
      >
        {item.url ? <a href={item.url}>{inner}</a> : inner}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}

function KliniCollapsibleItem({
  item,
  onNavItemClick,
}: {
  item: KliniNavItem
  onNavItemClick?: (url: string) => void
}) {
  return (
    <Collapsible
      asChild
      defaultOpen={item.isActive || item.items?.some(s => s.isActive)}
      className="group/collapsible"
    >
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton tooltip={item.title} isActive={item.isActive}>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            {item.badge !== undefined && <KliniNavBadge>{item.badge}</KliniNavBadge>}
            <ChevronRight className="ml-auto size-4 shrink-0 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.items?.map((sub) => (
              <SidebarMenuSubItem key={sub.title}>
                <SidebarMenuSubButton
                  isActive={sub.isActive}
                  onClick={() => onNavItemClick?.(sub.url)}
                  asChild
                >
                  <a href={sub.url} className={cn(sub.isActive && 'font-medium')}>
                    <span>{sub.title}</span>
                    {sub.badge !== undefined && <KliniNavBadge>{sub.badge}</KliniNavBadge>}
                  </a>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  )
}

function KliniNavBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge
      variant="secondary"
      className="ml-auto h-5 min-w-5 justify-center rounded-full px-1.5 text-[10px] font-medium"
    >
      {children}
    </Badge>
  )
}
