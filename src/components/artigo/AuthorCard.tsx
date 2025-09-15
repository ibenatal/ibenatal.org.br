import { InstagramIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type AuthorCardProps = {
  name: string;
  avatarSrc?: string;
  instagramUrl?: string;
  catchphrase?: string;
  className?: string;
};

export function AuthorCard({
  name,
  avatarSrc,
  instagramUrl,
  catchphrase,
  className,
}: AuthorCardProps) {
  let catchphraseText = catchphrase?.trim();
  if (catchphraseText && catchphraseText[catchphraseText.length - 1] !== ',') {
    catchphraseText += ',';
  }
  return (
    <div
      className={cn(
        'flex items-start gap-4 rounded-lg bg-gray-50 p-4 sm:items-center sm:gap-6 sm:p-6',
        className,
      )}
    >
      <div className="relative h-16 w-16 overflow-hidden rounded-full shadow ring-2 ring-white sm:h-20 sm:w-20">
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={`Foto de ${name}`}
            fill
            sizes="80px"
            quality={100}
            className="object-cover"
            priority={false}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary-100 text-primary-700">
            <span className="font-semibold">
              {name
                .split(' ')
                .map((n) => n[0])
                .slice(0, 2)
                .join('')}
            </span>
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-x-3 gap-y-2">
          {!!catchphraseText && (
            <p className="mt-2 text-gray-700 text-sm italic sm:text-base">
              {catchphraseText}
            </p>
          )}
          <div className="flex flex-row gap-x-3 gap-y-2">
            <p className="truncate font-semibold text-base text-primary-900 sm:text-lg">
              {name}
            </p>
            {!!instagramUrl && (
              <Link
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-md px-1 py-1 text-secondary-600 text-sm transition-colors hover:bg-gray-200 hover:text-secondary-700"
                aria-label={`Instagram de ${name}`}
                title={`Instagram de ${name}`}
              >
                <InstagramIcon className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export type { AuthorCardProps };
