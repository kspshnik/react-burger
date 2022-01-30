import React from 'react';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import cgStyles from './constructor-grid.module.css';

import { dropInterior } from '../../services/actionCreators';

const ConstructorGrid = () => {
  const { choice } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();
  return (
    <ul className={cgStyles.grid}>
      {choice.map((item) => (
        <li className={`${cgStyles.item} p-2`} key={item.bcid}>
          <div className={`${cgStyles.drag} pr-1`}>
            <DragIcon type='secondary' />
          </div>
          <ConstructorElement
            isLocked={false}
            text={item.name}
            price={item.price}
            thumbnail={item.image_mobile}
            handleClose={() => dispatch(dropInterior(item))} />
        </li>
      ))}
    </ul>

  );
};

export default ConstructorGrid;
