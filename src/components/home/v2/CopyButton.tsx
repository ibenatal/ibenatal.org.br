'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Copia um texto (ex.: chave PIX) e confirma por 2 segundos. */
export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        'inline-flex h-10 w-fit cursor-pointer items-center gap-2 rounded-sm px-4 font-heading font-semibold text-sm transition',
        copied
          ? 'bg-primary-500 text-white'
          : 'bg-quaternary-500 text-white hover:bg-quaternary-600',
      )}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      <span aria-live="polite">{copied ? 'Copiado!' : label}</span>
    </button>
  );
}
