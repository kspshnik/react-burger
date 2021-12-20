import React from 'react';

import PropTypes from 'prop-types';
import IngredientsContext from '../../contexts/ingredientsContext';

import idStyles from './ingredient-details.module.css';

const IngredientDetails = ({ id }) => {
  const ingredients = React.useContext(IngredientsContext);
  const {
    name, image_large, proteins, fat,
    carbohydrates,
    calories,
  } = ingredients[id];
  return (
    <div className={`${idStyles.content} pl-25 pr-25`}>
      <img className={`${idStyles.image} pl-5 pr-5`} src={image_large} alt={name} />
      <h3 className={`${idStyles.subtitle} pt-4 pb-8 text text_type_main-medium`}>{name}</h3>
      <ul className={`${idStyles.props} pb-4`}>
        <li className='list-item'>
          <h4 className='text text_type_main-default text_color_inactive'>Калории, ккал</h4>
        </li>
        <li className='list-item'>
          <h4 className='text text_type_main-default text_color_inactive'>Белки, г</h4>
        </li>
        <li className='list-item'>
          <h4 className='text text_type_main-default text_color_inactive'>Жиры, г</h4>
        </li>
        <li className='list-item'>
          <h4 className='text text_type_main-default text_color_inactive'>Углеводы, г</h4>
        </li>
        <li className='list-item'>
          <p className='"text text_type_digits-default text_color_inactive'>{calories}</p>
        </li>
        <li className='list-item'>
          <p className='"text text_type_digits-default text_color_inactive'>{proteins}</p>
        </li>
        <li className='list-item'>
          <p className='"text text_type_digits-default text_color_inactive'>{fat}</p>
        </li>
        <li className='list-item'>
          <p className='"text text_type_digits-default text_color_inactive'>{carbohydrates}</p>
        </li>
      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  id: PropTypes.string.isRequired,
};

export default IngredientDetails;
