import type { AnchorHTMLAttributes, ReactNode } from 'react';
export type ArticleLinkBoxAwards = { title: string; icon: string };
export type FetchPriority = 'auto' | 'high' | 'low';
export interface ArticleLinkBoxProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  description: string;
  awards: ArticleLinkBoxAwards[];
  children?: ReactNode;
  icon: string;
  fetchPriority: FetchPriority;
}
