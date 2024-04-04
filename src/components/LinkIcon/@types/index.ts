import { HTMLAttributes, ReactNode } from 'react';

export interface LinkIconProps extends HTMLAttributes<HTMLElement> {
  className?: string;
  children?: ReactNode;
}
