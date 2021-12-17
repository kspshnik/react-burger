import React, { useContext } from 'react';

import PropTypes from 'prop-types';
import icStyles from './ingredients-grid.module.css';

import IngredientCard from '../ingredient-card/ingredient-card';

import ingredientsContext from '../../contexts/ingredientsContext';

const IngredientsGrid = ({ order, plusCallback, type }) => {
  const ingredients = useContext(ingredientsContext);
  const ingredientsValues = ingredients ? Object.values(ingredients) : [];

  const count = (id) => order.filter((val) => val === id).length;
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
          key={item._id} />
      ))}
    </ul>
  );
};

IngredientsGrid.propTypes = {
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
  plusCallback: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default IngredientsGrid;
