import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type VariantProps<T extends (...args: any) => any> = Omit<Parameters<T>[0], "class" | "className">

export function cva(
  base: string,
  config?: {
    variants?: Record<string, Record<string, string>>
    defaultVariants?: Record<string, string>
  },
) {
  return (props?: Record<string, any>) => {
    if (!config?.variants) return base

    let classes = base

    for (const [key, value] of Object.entries(props || {})) {
      if (config.variants[key] && config.variants[key][value]) {
        classes += ` ${config.variants[key][value]}`
      }
    }

    // Apply default variants for missing props
    if (config.defaultVariants) {
      for (const [key, defaultValue] of Object.entries(config.defaultVariants)) {
        if (!(key in (props || {})) && config.variants[key] && config.variants[key][defaultValue]) {
          classes += ` ${config.variants[key][defaultValue]}`
        }
      }
    }

    return classes
  }
}
