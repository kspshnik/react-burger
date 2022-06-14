import React, { ReactNode, SyntheticEvent } from 'react';

declare global{
  const Button: React.FC<{
    children?: ReactNode,
    type?: 'secondary' | 'primary';
    size?: 'small' | 'medium' | 'large';
    onClick?: (() => void) | ((e: SyntheticEvent) => void);
    disabled?: boolean;
    name?: string;
    htmlType?: 'button' | 'submit' | 'reset';
  }>;
}
