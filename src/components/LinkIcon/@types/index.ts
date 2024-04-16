import type { AnchorHTMLAttributes, ReactNode } from 'react';

export interface LinkIconProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children?: ReactNode;
}
