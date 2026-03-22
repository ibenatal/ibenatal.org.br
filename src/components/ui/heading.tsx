import type * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('scroll-m-20 tracking-tight text-balance', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold leading-relaxed',
      h2: 'text-3xl font-semibold leading-relaxed',
      h3: 'text-2xl font-semibold leading-relaxed',
      h4: 'text-xl font-semibold leading-relaxed',
      h5: 'text-lg font-semibold leading-relaxed',
    },
  },
  defaultVariants: {
    variant: 'h1',
  },
});

interface HeadingProperties
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  asChild?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

function Heading({ className, variant, as, asChild = false, ...properties }: HeadingProperties) {
  const Comp = asChild ? Slot : as || (variant as 'h1' | 'h2' | 'h3' | 'h4' | 'h5') || 'h1';

  return <Comp className={cn(headingVariants({ variant, className }))} {...properties} />;
}

export { Heading, headingVariants };
