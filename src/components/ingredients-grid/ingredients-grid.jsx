import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import icStyles from './ingredients-grid.module.css';

import IngredientCard from '../ingredient-card/ingredient-card';

import IngredientsContext from '../../contexts/ingredientsContext';

const IngredientsGrid = ({
  order, plusCallback, detailsCallback, type,
}) => {
  const ingredients = useContext(IngredientsContext);
  const ingredientsValues = ingredients ? Object.values(ingredients) : [];

  const count = (id) => {
    let preCount = order.filter((val) => val === id).length;
    if (ingredients[id].type === 'bun' && order.includes(id)) {
      preCount += 1;
    }
    return preCount;
  };
  return (
    <ul className={icStyles.grid}>
      {ingredientsValues.filter((el) => el.type === type).map((item) => (
        <IngredientCard
          id={item._id}
          name={item.name}
          price={item.price}
          img={item.image}
          count={count(item._id)}
          plusCallback={plusCallback}
          detailsCallback={detailsCallback}
          key={item._id} />
      ))}
    </ul>
  );
};

IngredientsGrid.propTypes = {
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
  plusCallback: PropTypes.func.isRequired,
  detailsCallback: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientsGrid;
