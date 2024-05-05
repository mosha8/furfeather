import type { AnchorHTMLAttributes, ReactNode } from 'react';
export type LinkVariant = 'text' | 'outlined';
export type LinkSize = 'small' | 'medium';
export type LinkColor = 'primary' | 'secondary';
export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  active?: boolean;
  title?: string;
  variant?: LinkVariant;
  color?: LinkColor;
  size?: LinkSize;
  externalUrl?: string;
  target?: '_self' | '_blank';
  children: ReactNode;
}
