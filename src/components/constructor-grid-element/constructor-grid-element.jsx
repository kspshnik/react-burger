import React from 'react';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import cgeStyles from './constructor-grid-element.module.css';
import {
  dropInterior, moveInterior,
}                from '../../services/actionCreators';
import { ORDER } from '../../constants';
import DropZone from '../drop-zone/drop-zone';

const ConstructorGridElement = ({ item, index }) => {
  const dispatch = useDispatch();

  const [{ isOnTheWay }, dragRef] = useDrag(() => ({
    type: ORDER,
    item: { ...item },
    collect: (monitor) => ({
      isOnTheWay: monitor.isDragging(),
    }),
  }), [item]);

  const handleDrop = (dropItem) => {
    dispatch(moveInterior(dropItem, index));
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

ConstructorGridElement.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    bcid: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ConstructorGridElement;
