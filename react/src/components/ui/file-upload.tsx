import * as React from "react"
import { File as FileIcon, Upload, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

export interface FileUploadProps {
  url?: string
  multiple?: boolean
  accept?: string
  maxFileSize?: number
  auto?: boolean
  chooseLabel?: string
  uploadLabel?: string
  cancelLabel?: string
  onSelect?: (files: File[]) => void
  onUpload?: (files: File[]) => void
  onUploadError?: (error: string) => void
  className?: string
}

const FileUpload = React.forwardRef<HTMLDivElement, FileUploadProps>(
  (
    {
      url,
      multiple = false,
      accept,
      maxFileSize,
      auto = false,
      chooseLabel = "Selecionar",
      uploadLabel = "Enviar",
      cancelLabel = "Cancelar",
      onSelect,
      onUpload,
      onUploadError,
      className,
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null)
    const [files, setFiles] = React.useState<File[]>([])
    const [dragOver, setDragOver] = React.useState(false)

    const addFiles = (list: FileList | null) => {
      if (!list) return
      const incoming = Array.from(list)
      const tooBig = maxFileSize ? incoming.filter((f) => f.size > maxFileSize) : []
      if (tooBig.length > 0) {
        onUploadError?.(`Arquivo excede o tamanho máximo permitido: ${tooBig.map((f) => f.name).join(", ")}`)
        return
      }
      const next = multiple ? [...files, ...incoming] : incoming.slice(0, 1)
      setFiles(next)
      onSelect?.(next)
      if (auto) doUpload(next)
    }

    const doUpload = (list: File[]) => {
      if (!url || list.length === 0) return
      const form = new FormData()
      list.forEach((f) => form.append("files", f))
      fetch(url, { method: "POST", body: form })
        .then(() => {
          onUpload?.(list)
          setFiles([])
        })
        .catch((err) => onUploadError?.(String(err)))
    }

    return (
      <div ref={ref} className={cn("flex flex-col gap-3", className)}>
        <div
          onDragOver={(e) => {
            e.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault()
            setDragOver(false)
            addFiles(e.dataTransfer.files)
          }}
          className={cn(
            "flex flex-col items-center gap-2 rounded-md border-2 border-dashed p-6 text-center transition-colors",
            dragOver ? "border-primary bg-primary/5" : "border-muted-foreground/30"
          )}
        >
          <Upload className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">Arraste arquivos aqui ou</p>
          <Button type="button" variant="outline" size="sm" onClick={() => inputRef.current?.click()}>
            {chooseLabel}
          </Button>
          <input
            ref={inputRef}
            type="file"
            multiple={multiple}
            accept={accept}
            hidden
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>

        {files.length > 0 && (
          <ul className="flex flex-col gap-1">
            {files.map((file, index) => (
              <li key={index} className="flex items-center justify-between rounded-md border px-3 py-2 text-sm">
                <span className="flex items-center gap-2 truncate">
                  <FileIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="truncate">{file.name}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setFiles((prev) => prev.filter((_, i) => i !== index))}
                  aria-label="Remover"
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        )}

        {!auto && files.length > 0 && (
          <div className="flex gap-2">
            <Button type="button" size="sm" onClick={() => doUpload(files)}>
              {uploadLabel}
            </Button>
            <Button type="button" size="sm" variant="outline" onClick={() => setFiles([])}>
              {cancelLabel}
            </Button>
          </div>
        )}
      </div>
    )
  }
)
FileUpload.displayName = "FileUpload"

export { FileUpload }
