import { HTMLAttributes } from 'react';

export interface SloganParagraphProps
  extends HTMLAttributes<HTMLParagraphElement> {
  isFooterSlogan?: boolean;
}
