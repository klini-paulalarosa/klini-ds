import * as React from "react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion"
import type { TreeMenuItem } from "./tiered-menu"

export interface PanelMenuProps {
  model: TreeMenuItem[]
  multiple?: boolean
  className?: string
}

function PanelMenuNode({ item, index }: { item: TreeMenuItem; index: number }) {
  if (!item.items?.length) {
    return (
      <button
        type="button"
        disabled={item.disabled}
        onClick={item.onClick}
        className="flex w-full items-center gap-2 px-2 py-3 text-left text-sm font-medium outline-none hover:bg-accent hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        {item.icon}
        {item.label}
      </button>
    )
  }

  return (
    <AccordionItem value={`item-${index}`}>
      <AccordionTrigger className="gap-2 px-2 py-3 text-sm hover:no-underline">
        <span className="flex items-center gap-2">
          {item.icon}
          {item.label}
        </span>
      </AccordionTrigger>
      <AccordionContent className="pl-4">
        {item.items.map((child, i) => (
          <PanelMenuNode key={i} item={child} index={i} />
        ))}
      </AccordionContent>
    </AccordionItem>
  )
}

const PanelMenu = React.forwardRef<HTMLDivElement, PanelMenuProps>(({ model, multiple = true, className }, ref) => (
  <div ref={ref} className={className}>
    {multiple ? (
      <Accordion type="multiple">
        {model.map((item, index) => (
          <PanelMenuNode key={index} item={item} index={index} />
        ))}
      </Accordion>
    ) : (
      <Accordion type="single" collapsible>
        {model.map((item, index) => (
          <PanelMenuNode key={index} item={item} index={index} />
        ))}
      </Accordion>
    )}
  </div>
))
PanelMenu.displayName = "PanelMenu"

export { PanelMenu }
