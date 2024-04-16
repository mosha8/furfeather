import type { ButtonHTMLAttributes, ReactNode } from 'react';
export type ButtonVariant = 'contained' | 'outlined';
export type ButtonColor = 'primary' | 'secondary' | 'success' | 'error';
export type ButtonSize = 'small' | 'medium';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  color: ButtonColor;
  size: ButtonSize;
  className?: string;
  // onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  children?: ReactNode;
}
