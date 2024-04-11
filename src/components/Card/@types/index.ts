import { PropsWithChildren } from 'react';

export interface CardProps extends PropsWithChildren {
  title?: string;
  description?: string;
  label?: string;
  href?: string;
}
