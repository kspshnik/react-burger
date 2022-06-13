import { ReactNode } from 'react';
import {
  IDropHandler, IGenericHandler, TDropItemType, TIngredient, TIngredientType, TOrder, TTooltipType,
} from './types';
import { TFeedType } from './websocket.types';

type TChildrenPropType = ReactNode | Array<ReactNode>;

export type TTooltipProps = {
  message: string,
  type?: TTooltipType,
};

export type TTwoColumnsProps = {
  children: TChildrenPropType,
  profile?: boolean,
};

export type TPopupProps = {
  message: string,
};

export type TScrollAreaProps = {
  contentClass: string,
  children: TChildrenPropType,
};

export type TCenterInfoProps = {
  children: TChildrenPropType,
};

export type TConstructorGridElementProps = {
  item: TIngredient & { index: number },
  index: number,
};

export type TContentRibbonProps = {
  content: Array<string>,
};

export type TDropZoneProps = {
  contentClass?: string,
  hoverClass?: string,
  handleDrop: IDropHandler,
  children: TChildrenPropType,
  type: TDropItemType,
};

export type TModalWindowProps = {
  message: string,
};

export type TInfoGridProps = {
  pendingOrders : Array<number>,
  doneOrders: Array<number>,
};

export type TInfoPlateProps = {
  title: string,
  quantity: number,
};

export type TIngredientCardProps = {
  data: TIngredient,
  count?: number,
};

export type TIngredientPlateProps = {
  img: string,
  name: string,
  qty: number,
  price: number,
};

export type TIngredientsGridProps = {
  type: TIngredientType
};

export type TLinkBoxProps = {
  caption: string,
  linkName: string,
  linkTo: string,
  extraClasses: string,
};

export type TLoaderProtectorProps = {
  isLoaded: boolean,
  children: TChildrenPropType,
};

export type TModalProps = {
  onClose: IGenericHandler,
  title?: string | null,
  children: TChildrenPropType,
};

export type TModalOverlayProps = {
  onClose: IGenericHandler,
};

export type TRouteProps = {
  children: TChildrenPropType,
  [key:string]: any;
};

export type TOrderDetailsProps = {
  order: TOrder,
};

export type TOrderPlateProps = {
  order: TOrder,
  feedType: TFeedType,
};

export type TOrderRibbonProps = {
  feedType: TFeedType,
};
