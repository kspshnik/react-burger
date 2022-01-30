import React from 'react';
import { useDispatch } from 'react-redux';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import icStyles from './ingredient-card.module.css';

import { selectIngredient, insertInterior, setBun } from '../../services/actionCreators';
import { BUN } from '../../constants';

const IngredientCard = ({ data, count }) => {
  const {
    name, price, image, type,
  } = data;
  const dispatch = useDispatch();
  const insertIngredient = type === BUN ? setBun : insertInterior;

  const handleNameClick = () => dispatch(insertIngredient(data));
  const handleKeyPressOnName = (evt) => {
    if ((evt.target === evt.currentTarget) && (evt.key === 'Enter' || evt.key === 'Space')) {
      dispatch(insertIngredient(data));
    }
  };
  const handleImgClick = () => dispatch(selectIngredient(data));
  const handleKeyPressOnImg = (evt) => {
    if ((evt.target === evt.currentTarget) && (evt.key === 'Enter' || evt.key === 'Space')) {
      dispatch(selectIngredient(data));
    }
  };
  return (
    <li className='list-item'>
      <article className={`${icStyles.card} `}>
        {count > 0 ? (<Counter size='default' count={count} />) : ('')}
        <button
          className={icStyles.details}
          type='button'
          onClick={handleImgClick}
          onKeyPress={handleKeyPressOnImg}>
          <img
            src={image}
            alt={name}
            className={icStyles.image} />
        </button>
        <div className={`${icStyles.pricing} p-2`}>
          <p className='text text_type_digits-default mr-2'>{price}</p>
          <CurrencyIcon type='primary' />
        </div>
        <button
          className={`${icStyles.add} text text_type_main-default`}
          type='button'
          tabIndex='0'
          onClick={handleNameClick}
          onKeyPress={handleKeyPressOnName}>
          {name}
        </button>
      </article>
    </li>
  );
};

IngredientCard.defaultProps = {
  count: 0,
};

IngredientCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbonhydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
  }).isRequired,
  count: PropTypes.number,

};
export default IngredientCard;
