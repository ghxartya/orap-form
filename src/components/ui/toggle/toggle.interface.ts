import type { ButtonHTMLAttributes } from 'react';

export interface ToggleProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-label'> {
  label: string;
}
