import { PropsWithoutRef, ReactNode } from 'react';

export type TTooltipProps = {
  message: string,
  type?: string,
};

export type TTwoColumnsProps = {
  children: ReactNode,
  profile: boolean,
};

export type TPopupProps = {
  message: string,
}

type TScrollAreaOwnProps = {
  contentClass: string,
  children: ReactNode,
}

export type TScrollAreaProps = PropsWithoutRef<TScrollAreaOwnProps>;
