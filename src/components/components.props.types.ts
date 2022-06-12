import { PropsWithoutRef, ReactNode } from 'react';
import { TTooltipType } from '../types/types';

export type TTooltipProps = {
  message: string,
  type?: TTooltipType,
};

export type TTwoColumnsProps = {
  children: ReactNode | Array<ReactNode>,
  profile?: boolean,
};

export type TPopupProps = {
  message: string,
};

type TScrollAreaOwnProps = {
  contentClass: string,
  children: ReactNode,
};

export type TScrollAreaProps = PropsWithoutRef<TScrollAreaOwnProps>;
