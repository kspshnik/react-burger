import React, {
  FC, useEffect, useState,
} from 'react';
import { useDrop } from 'react-dnd';
import { TIngredient } from '../../types/types';
import { TDropZoneProps } from '../../types/components.props.types';

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

export default DropZone;
