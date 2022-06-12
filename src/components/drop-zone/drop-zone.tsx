import React, {
  FC, ReactNode, useEffect, useState,
} from 'react';
import { useDrop } from 'react-dnd';
import { IDropHandler, TIngredient, TIngredientType } from '../../types/types';

type TDropZoneProps = {
  contentClass?: string,
  hoverClass?: string,
  handleDrop: IDropHandler,
  children: ReactNode | Array<ReactNode>,
  type: TIngredientType,
};

const DropZone : FC<TDropZoneProps> = ({
  children,
  contentClass = '',
  hoverClass = '',
  handleDrop,
  type,
}) => {
  const [item, setItem] = useState<TIngredient | null>(null);
  const onDrop = () => {
    if (item) {
      handleDrop(item);
    }
  };
  const [{
    isOver, dropItem,
  }, dropRef] = useDrop({
    accept: type,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      dropItem: monitor.getItem<TIngredient>(),
    }),
    drop: onDrop,
  }, [item]);
  useEffect(() => {
    setItem(dropItem);
  }, [dropItem]);
  return (
    <div className={`${contentClass} ${isOver ? hoverClass : ''}`} ref={dropRef}>
      {children}
    </div>
  );
};

DropZone.defaultProps = {
  contentClass: '',
  hoverClass: '',
};

export default DropZone;
