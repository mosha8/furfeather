import { HTMLAttributes } from 'react';
export type SloganSize = 'medium' | 'large';
export interface SloganParagraphProps
  extends HTMLAttributes<HTMLParagraphElement> {
  size?: SloganSize;
}
