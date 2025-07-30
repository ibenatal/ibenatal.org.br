'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export function Pagination() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = 10;

  // Calculate the range of pages to show
  const getPageRange = () => {
    let start = Math.max(1, currentPage - 2);
    const end = Math.min(totalPages, start + 4);

    // Adjust start if end is at max
    if (end === totalPages) {
      start = Math.max(1, end - 4);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Here you would typically also trigger a data fetch for the new page
  };

  const pages = getPageRange();
  const _showEllipsisStart = pages[0] > 1;
  const _showEllipsisEnd = pages[pages.length - 1] < totalPages;

  return (
    <div className="flex flex-row gap-2 md:gap-4 relative justify-between py-10">
      <Button
        variant="primary"
        outline
        className={cn('self-end', currentPage === 1 && 'hidden')}
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Anterior
      </Button>

      <div className="flex flex-row gap-2 md:gap-4">
        {pages.map((page) => (
          <Button
            key={page}
            variant="primary"
            outline={page !== currentPage}
            onClick={() => handlePageChange(page)}
            className={cn(
              'hidden lg:block',
              page === currentPage && 'bg-primary-500 text-white',
            )}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="primary"
        outline
        className={cn('self-end', currentPage === totalPages && 'hidden')}
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Próxima
      </Button>
    </div>
  );
}
