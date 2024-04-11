import { LinkHTMLAttributes, ReactNode } from 'react';

export interface LinkBoxProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  source: string;
  icon: ReactNode | string;
}
