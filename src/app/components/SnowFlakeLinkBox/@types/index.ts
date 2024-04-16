import type { AnchorHTMLAttributes, ReactNode } from 'react';
export type ProjectOverlayLinkAwards = { title: string; icon: string };
export type FetchPriority = 'auto' | 'high' | 'low';
export interface SnowFlakeLinkBoxProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  description: string;
  awards: ProjectOverlayLinkAwards[];
  children?: ReactNode;
  icon: string;
  fetchPriority: FetchPriority;
}
