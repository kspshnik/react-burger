import React from 'react';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import icStyles from './ingredients-grid.module.css';

import IngredientCard from '../ingredient-card/ingredient-card';

const IngredientsGrid = ({ type }) => {
  const { all } = useSelector((state) => state.ingredients);
  const { bun, choice } = useSelector((state) => state.orders);
  const order = React.useMemo(() => {
    if (bun) {
      return [bun, ...choice];
    }
    return choice;
  }, [bun, choice]);
  const ingredientsValues = React.useMemo(() => {
    if (!all) {
      return [];
    }
    return Object.values(all);
  }, [all]);

  const count = (id) => {
    let preCount = order?.filter((item) => item?._id === id).length;
    if (all[id].type === 'bun' && order?.map((item) => item?._id).includes(id)) {
      preCount += 1;
    }
    return preCount;
  };

  return (
    <ul className={icStyles.grid}>
      {ingredientsValues.filter((el) => el?.type === type).map((item) => (
        <IngredientCard
          data={item}
          count={count(item?._id)}
          key={item?._id} />
      ))}
    </ul>
  );
};

IngredientsGrid.propTypes = {
  type: PropTypes.string.isRequired,
};

export default IngredientsGrid;
