import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  /* todos as classes que se repetem em todas as variantes. */
  /* essas classes podem ser passadas em array como abaixo para facilitar a compreensão, separando por exemplo o  FOCUS */
  base: [
    'rounded-lg px-4 py-2 text-sm font-semibold outline-none shadow-sm',
    'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500',
    'active:opacity-80',
  ],

  /* classes variaveis */
  variants: {
    variant: {
      primary:
        'bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600',
      ghost:
        'rounded-md px-2 hover:bg-zinc-50 shadow-none text-zinc-500 dark:hover:bg-white/5  dark:text-zinc-400',
      outline:
        'border border-zinc-300 text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800',
    },
  },

  /* Variante padrão */
  defaultVariants: {
    variant: 'primary',
  },
})

export interface ButtonProps
  extends ComponentProps<'button'>,
    VariantProps<typeof button> {}

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ variant, className })} />
}
