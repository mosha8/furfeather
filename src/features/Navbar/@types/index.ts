import type { LinkHTMLAttributes, ReactNode } from 'react';

export interface NavItemsProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children?: ReactNode;
}
