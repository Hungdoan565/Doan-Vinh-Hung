import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import type { ComponentPropsWithoutRef } from 'react'

type ButtonVariant = 'primary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white shadow-sm hover:bg-accent-hover hover:shadow-md',
  outline:
    'border border-border text-text hover:border-accent/40 hover:text-accent hover:bg-accent-soft',
  ghost:
    'text-muted hover:text-text hover:bg-surface-alt',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 px-3 text-xs gap-1.5',
  md: 'h-10 px-4 text-sm gap-2',
  lg: 'h-11 px-5 text-sm gap-2',
}

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<'button'> & { href?: undefined }

type ButtonAsLink = ButtonBaseProps &
  ComponentPropsWithoutRef<'a'> & { href: string; target?: string; rel?: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const baseClasses = cn(
    'group relative inline-flex items-center justify-center rounded-full font-medium',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg',
    'disabled:pointer-events-none disabled:opacity-50',
    variantClasses[variant],
    sizeClasses[size],
    className,
  )

  if ('href' in props && props.href !== undefined) {
    const { href, target, rel, onClick } = props as ButtonAsLink
    return (
      <motion.a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        className={baseClasses}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.15 }}
      >
        {children}
      </motion.a>
    )
  }

  const { onClick, disabled, type } = props as ButtonAsButton
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      className={baseClasses}
      whileHover={{ y: -1 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  )
}
