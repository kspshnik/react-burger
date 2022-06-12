import React, { FC } from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDrag } from 'react-dnd';
import { useDispatch } from '../../services/store/hooks';
import cgeStyles from './constructor-grid-element.module.css';
import {
  dropInterior, moveInterior,
} from '../../services/store';
import { ORDER } from '../../constants';
import DropZone from '../drop-zone/drop-zone';
import { TIngredient } from '../../types/types';

type TConstructorGridElementProps = {
  item: TIngredient & { index: number },
  index: number,
};

const ConstructorGridElement : FC<TConstructorGridElementProps> = ({ item, index }) => {
  const dispatch = useDispatch();

  const [{ isOnTheWay }, dragRef] = useDrag(() => ({
    type: ORDER,
    item: { ...item },
    collect: (monitor) => ({
      isOnTheWay: monitor.isDragging(),
    }),
  }), [item]);

  const handleDrop = (dropItem : TIngredient) => {
    dispatch(moveInterior({ ingredient: dropItem, to: index }));
  };

  return (

    <li ref={dragRef} className={`${cgeStyles.item} p-2 ${isOnTheWay ? cgeStyles.item_dragged : ''}`}>
      <DropZone
        handleDrop={handleDrop}
        type={ORDER}
        contentClass={cgeStyles.drop}
        hoverClass={cgeStyles.drop_targeted}>
        <div className={`${cgeStyles.drag} pr-1`}>
          <DragIcon type='secondary' />
        </div>
        <ConstructorElement
          isLocked={false}
          text={item?.name}
          price={item?.price}
          thumbnail={item?.image_mobile}
          handleClose={() => dispatch(dropInterior(item))} />
      </DropZone>
    </li>

  );
};

export default ConstructorGridElement;
