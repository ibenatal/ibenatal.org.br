import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer font-barlow",
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        secondary: 'bg-secondary text-white shadow-xs hover:bg-secondary/80',
        tertiary: 'bg-tertiary text-white shadow-xs hover:bg-tertiary/80',
        quaternary: 'bg-quaternary text-white shadow-xs hover:bg-quaternary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      outline: {
        true: '',
        false: '',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        outline: true,
        className:
          'border-2 border-primary bg-white/10 text-primary hover:bg-primary/10',
      },
      {
        variant: 'destructive',
        outline: true,
        className:
          'border-2 border-destructive bg-white/10 text-destructive hover:bg-destructive/10',
      },
      {
        variant: 'secondary',
        outline: true,
        className:
          'border-2 border-secondary bg-white/10 text-secondary hover:bg-secondary/10',
      },
      {
        variant: 'tertiary',
        outline: true,
        className:
          'border-2 border-tertiary bg-white/10 text-tertiary hover:bg-tertiary/10',
      },
      {
        variant: 'quaternary',
        outline: true,
        className:
          'border-2 border-quaternary bg-white/10 text-quaternary hover:bg-quaternary/10 ',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      outline: false,
    },
  },
);

function Button({
  className,
  variant,
  size,
  outline,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, outline, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
