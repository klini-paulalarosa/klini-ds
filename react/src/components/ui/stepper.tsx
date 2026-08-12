import * as React from "react"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

export interface StepperStep {
  label: string
  description?: string
  icon?: React.ReactNode
}

export interface StepperProps {
  steps: StepperStep[]
  activeStep?: number
  linear?: boolean
  onActiveStepChange?: (index: number) => void
  className?: string
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ steps, activeStep = 0, linear = false, onActiveStepChange, className }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-center">
        {steps.map((step, index) => {
          const isDone = index < activeStep
          const isActive = index === activeStep
          const isLast = index === steps.length - 1
          const reachable = !linear || index <= activeStep

          return (
            <React.Fragment key={index}>
              <button
                type="button"
                disabled={!reachable}
                onClick={() => reachable && onActiveStepChange?.(index)}
                className={cn("flex flex-col items-center gap-1", reachable && "cursor-pointer")}
              >
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-semibold",
                    isDone && "border-primary bg-primary text-primary-foreground",
                    isActive && !isDone && "border-primary text-primary",
                    !isDone && !isActive && "border-muted-foreground/30 text-muted-foreground"
                  )}
                >
                  {isDone ? <Check className="h-4 w-4" /> : (step.icon ?? index + 1)}
                </span>
                <span className={cn("text-xs", isActive ? "font-semibold text-foreground" : "text-muted-foreground")}>
                  {step.label}
                </span>
              </button>
              {!isLast && (
                <div className={cn("mx-2 h-px flex-1", isDone ? "bg-primary" : "bg-muted-foreground/30")} />
              )}
            </React.Fragment>
          )
        })}
      </div>
      {steps[activeStep]?.description && (
        <p className="text-sm text-muted-foreground">{steps[activeStep].description}</p>
      )}
    </div>
  )
)
Stepper.displayName = "Stepper"

export { Stepper }
