import { HTMLAttributes } from 'react';
export type TaglineSize = 'medium' | 'large';
export interface TaglineProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TaglineSize;
}
