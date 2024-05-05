import type { PropsWithChildren } from 'react';

export interface CardProps extends PropsWithChildren {
  title?: string;
  description?: string;
  label?: string;
  href?: string;
  src?: string;
  className?: string;
}

export interface CardHeaderProps extends PropsWithChildren {
  src?: string;
}
export interface CardBodyProps extends PropsWithChildren {}
export interface CardFooterProps extends PropsWithChildren {
  href: string;
  label?: string;
}
