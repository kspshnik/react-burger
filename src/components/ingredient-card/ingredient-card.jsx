import React from 'react';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import icStyles from './ingredient-card.module.css';

const IngredientCard = ({
  id, name, price, count, img, plusCallback, detailsCallback,
}) => {
  const handleNameClick = () => plusCallback(id);
  const handleKeyPressOnName = (evt) => {
    if ((evt.target === evt.currentTarget) && (evt.key === 'Enter' || evt.key === 'Space')) {
      plusCallback(id);
    }
  };
  const handleImgClick = () => detailsCallback(id);
  const handleKeyPressOnImg = (evt) => {
    if ((evt.target === evt.currentTarget) && (evt.key === 'Enter' || evt.key === 'Space')) {
      detailsCallback(id);
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
            src={img}
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number,
  img: PropTypes.string.isRequired,
  plusCallback: PropTypes.func.isRequired,
  detailsCallback: PropTypes.func.isRequired,
};
export default IngredientCard;
