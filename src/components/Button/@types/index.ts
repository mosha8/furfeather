import type { ButtonHTMLAttributes, MouseEvent, ReactNode } from 'react';
export type ButtonVariant = 'text' | 'outlined' | 'contained';
export type ButtonSize = 'small' | 'medium';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'error';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  href?: string;
  externalUrl?: string;
  target?: '_self' | '_blank';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
