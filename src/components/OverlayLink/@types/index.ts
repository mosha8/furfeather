import { LinkHTMLAttributes, ReactNode } from 'react';

export interface OverlayLinkProps
  extends LinkHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  source: string;
  icon: ReactNode | string;
}
