import { ReactNode, AnchorHTMLAttributes } from 'react';
export type ProjectOverlayLinkAwards = { title: string; icon: string };
export interface ProjectOverlayLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  title: string;
  description: string;
  awards: ProjectOverlayLinkAwards[];
  children?: ReactNode;
  icon: string;
}
