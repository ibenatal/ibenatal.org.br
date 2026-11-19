import { cache } from 'react';
import path from 'node:path';
import 'server-only';
import sharp from 'sharp';

/**
 * Gera uma miniatura borrada (data URL) de uma imagem da pasta `public`, para usar como
 * `blurDataURL` no next/image. Assim, enquanto a foto carrega, aparece uma versão
 * embaçada dela no lugar de um fundo de cor sólida.
 *
 * Roda no servidor (as páginas são estáticas, então no build) e fica em cache por render.
 * Se a imagem não existir ou não puder ser lida, retorna undefined e a imagem carrega sem
 * placeholder.
 */
export const getBlurDataURL = cache(async (publicSrc: string): Promise<string | undefined> => {
  if (!publicSrc.startsWith('/')) return undefined;

  try {
    const filePath = path.join(process.cwd(), 'public', publicSrc);
    const buffer = await sharp(filePath).resize(16, 16, { fit: 'inside' }).webp().toBuffer();
    return `data:image/webp;base64,${buffer.toString('base64')}`;
  } catch (error) {
    console.error(`Could not create blur placeholder for ${publicSrc}:`, error);
    return undefined;
  }
});
