import { cn } from '@/lib/utils'

type BadgeVariant = 'default' | 'success' | 'accent'

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-surface-alt text-muted border border-border',
  success: 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20',
  accent: 'bg-accent-soft text-accent border border-accent/20',
}

interface BadgeProps {
  variant?: BadgeVariant
  className?: string
  children: React.ReactNode
}

export function Badge({ variant = 'default', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
