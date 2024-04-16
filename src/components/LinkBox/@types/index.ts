import type { LinkHTMLAttributes } from 'react';

export interface LinkBoxProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  source: string;
  icon: string;
}
