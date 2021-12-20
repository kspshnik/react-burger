import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import cgStyles from './constructor-grid.module.css';

import IngredientsContext from '../../contexts/ingredientsContext';

const ConstructorGrid = ({ order, minusCallback }) => {
  const ingredients = useContext(IngredientsContext);
  const itemsToMap = order.filter((item) => ingredients[item]?.type === 'sauce')
    .concat(order.filter((item) => ingredients[item]?.type === 'main')).map((item) => ingredients[item]);
  const getKey = (id) => `${id}-${Math.random() * Date.now()}`;
  return (
    <ul className={cgStyles.grid}>
      {itemsToMap.map((item) => (
        <li className={`${cgStyles.item} p-2`} key={getKey(item._id)}>
          <div className={`${cgStyles.drag} pr-1`}>
            <DragIcon type='secondary' />
          </div>
          <ConstructorElement
            isLocked={false}
            text={item.name}
            price={item.price}
            thumbnail={item.image_mobile}
            handleClose={() => minusCallback(item._id)} />
        </li>
      ))}
    </ul>

  );
};

ConstructorGrid.propTypes = {
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
  minusCallback: PropTypes.func.isRequired,
};

export default ConstructorGrid;
