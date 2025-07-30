'use client';

import { useEffect } from 'react';

export function ProductionLogger() {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      window.console.log(
        'Assim, quer vocês comam, quer bebam, quer façam qualquer outra coisa, façam tudo para a glória de Deus. 1Coríntios 10:31',
      );
    }
  }, []);

  return null;
}
