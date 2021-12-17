import React from 'react';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import PropTypes from 'prop-types';
import icStyles from './ingredient-card.module.css';

const IngredientCard = ({
  id, name, price, count, img, plusCallback,
}) => {
  const handleNameClick = () => plusCallback(id);
  const handleKeyPressOnName = (evt) => {
    if ((evt.target === evt.currentTarget) && (evt.key === 'Enter' || evt.key === 'Space')) {
      plusCallback(id);
    }
  };
  return (
    <li className='list-item'>
      <article className={`${icStyles.card} `}>
        {count > 0 ? (<Counter size='default' count={count} />) : ('')}
        <img src={img} alt={name} className={icStyles.image} />
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
};
export default IngredientCard;
