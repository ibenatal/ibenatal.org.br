import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const headingVariants = cva('scroll-m-20 tracking-tight text-balance', {
  variants: {
    variant: {
      h1: 'text-4xl font-extrabold text-center',
      h2: 'text-3xl font-semibold border-b pb-2 first:mt-0',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-semibold',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  asChild?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

function Heading({
  className,
  variant,
  as,
  asChild = false,
  ...props
}: HeadingProps) {
  const Comp = asChild
    ? Slot
    : as || (variant as 'h1' | 'h2' | 'h3' | 'h4' | 'h5') || 'h1';

  return (
    <Comp className={cn(headingVariants({ variant, className }))} {...props} />
  );
}

export { Heading, headingVariants };
