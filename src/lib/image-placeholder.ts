/**
 * Props do next/image para mostrar uma versão borrada da imagem enquanto ela carrega.
 * Sem data URL, não passa placeholder nenhum (o next/image exige blurDataURL com
 * placeholder="blur" quando o src é uma string).
 */
export function blurPlaceholder(blurDataURL?: string) {
  return blurDataURL ? { placeholder: 'blur' as const, blurDataURL } : {};
}
