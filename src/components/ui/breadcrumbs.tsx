'use client';

import Link from 'next/link';
import type * as React from 'react';
import { BreadcrumbSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';

interface BreadcrumbsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    label: string;
    href: string;
  }[];
}

export function Breadcrumbs({ items, className, ...props }: BreadcrumbsProps) {
  // Always include Home as the first item
  const breadcrumbItems = [{ label: 'Home', href: '/' }, ...items];

  const origin = typeof window !== 'undefined' ? window.location.origin : '';

  return (
    <>
      {/* Visible Breadcrumbs */}
      <nav
        className={cn('flex items-center space-x-2 text-sm', className)}
        aria-label="Breadcrumb"
        {...props}
      >
        <ol className="flex items-center">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-muted-foreground">/</span>
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-white/90 font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.href}
                  className="text-white/70 decoration hover:underline transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* Schema.org BreadcrumbList structured data */}
      <BreadcrumbSchema
        items={breadcrumbItems.map((item) => ({
          name: item.label,
          item: `${origin}${item.href}`,
        }))}
      />
    </>
  );
}
