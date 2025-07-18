import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const linkVariants = cva('inline-flex items-center gap-2', {
  variants: {
    variant: {
      default: 'text-primary hover:underline',
      inverse: 'text-white hover:text-white/80 hover:underline',
      muted: 'text-muted-foreground hover:text-primary',
      destructive: 'text-destructive hover:text-destructive/80',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  asChild?: boolean;
}

function LinkUI({ className, variant, asChild = false, ...props }: LinkProps) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp className={cn(linkVariants({ variant, className }))} {...props} />
  );
}

export { LinkUI, linkVariants };
