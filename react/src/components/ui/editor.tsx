import * as React from "react"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Bold, Italic, List, ListOrdered, Strikethrough } from "lucide-react"

import { cn } from "@/lib/utils"

export interface EditorProps {
  value?: string
  placeholder?: string
  readonly?: boolean
  onValueChange?: (value: string) => void
  className?: string
}

function ToolbarButton({
  active,
  onClick,
  children,
  label,
}: {
  active?: boolean
  onClick: () => void
  children: React.ReactNode
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        active && "bg-accent text-accent-foreground"
      )}
    >
      {children}
    </button>
  )
}

const Editor = React.forwardRef<HTMLDivElement, EditorProps>(
  ({ value = "", placeholder, readonly = false, onValueChange, className }, ref) => {
    const editor = useEditor({
      extensions: [StarterKit],
      content: value,
      editable: !readonly,
      immediatelyRender: false,
      onUpdate: ({ editor }) => onValueChange?.(editor.getHTML()),
    })

    React.useEffect(() => {
      if (editor && value !== editor.getHTML()) {
        editor.commands.setContent(value, { emitUpdate: false })
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    React.useEffect(() => {
      editor?.setEditable(!readonly)
    }, [editor, readonly])

    if (!editor) return null

    return (
      <div ref={ref} className={cn("rounded-md border", className)}>
        {!readonly && (
          <div className="flex items-center gap-1 border-b p-1.5">
            <ToolbarButton label="Negrito" active={editor.isActive("bold")} onClick={() => editor.chain().focus().toggleBold().run()}>
              <Bold className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Itálico" active={editor.isActive("italic")} onClick={() => editor.chain().focus().toggleItalic().run()}>
              <Italic className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton label="Tachado" active={editor.isActive("strike")} onClick={() => editor.chain().focus().toggleStrike().run()}>
              <Strikethrough className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              label="Lista"
              active={editor.isActive("bulletList")}
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
              <List className="h-4 w-4" />
            </ToolbarButton>
            <ToolbarButton
              label="Lista numerada"
              active={editor.isActive("orderedList")}
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
              <ListOrdered className="h-4 w-4" />
            </ToolbarButton>
          </div>
        )}
        <EditorContent
          editor={editor}
          className={cn(
            "p-3 text-sm",
            "[&_.ProseMirror]:min-h-[120px] [&_.ProseMirror]:outline-none",
            "[&_.ProseMirror_ul]:list-disc [&_.ProseMirror_ul]:pl-5",
            "[&_.ProseMirror_ol]:list-decimal [&_.ProseMirror_ol]:pl-5",
            "[&_.ProseMirror_p]:my-1"
          )}
          data-placeholder={placeholder}
        />
      </div>
    )
  }
)
Editor.displayName = "Editor"

export { Editor }
