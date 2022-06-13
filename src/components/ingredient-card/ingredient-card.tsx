// eslint-disable @typescript-eslint/naming-convention
import React, { FC, KeyboardEventHandler, MouseEventHandler } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useDrag } from 'react-dnd';

import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from '../../services/store/hooks';
import { selectIngredient, insertInterior, setBun } from '../../services/store';
import { BUN, INGREDIENT } from '../../constants';

import icStyles from './ingredient-card.module.css';
import { TLocationState } from '../../types/types';
import { TIngredientCardProps } from '../../types/components.props.types';

const IngredientCard : FC<TIngredientCardProps> = ({ data, count = 0 }) => {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    name, price, image, type, _id,
  } = data;
  const dispatch = useDispatch();
  const location = useLocation<TLocationState>();
  const history = useHistory();
  const [{ isOnTheWay }, dragRef] = useDrag(() => ({
    type: INGREDIENT,
    item: { ...data },
    collect: (monitor) => ({
      isOnTheWay: monitor.isDragging(),
    }),
  }), [data]);

  const handleNameClick : MouseEventHandler<HTMLButtonElement> = () => {
    if (type === BUN) {
      dispatch(setBun(data));
    } else {
      dispatch(insertInterior(data));
    }
  };
  const handleKeyPressOnName : KeyboardEventHandler<HTMLButtonElement> = (evt) => {
    if ((evt.target === evt.currentTarget) && (evt.key === 'Enter' || evt.key === 'Space')) {
      if (type === BUN) {
        dispatch(setBun(data));
      } else {
        dispatch(insertInterior(data));
      }
    }
  };
  const handleImgClick : MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(selectIngredient(data));
    history.push({ pathname: `/ingredients/${_id}`, state: { background: location } });
  };
  const handleKeyPressOnImg : KeyboardEventHandler<HTMLButtonElement> = (evt) => {
    if ((evt.target === evt.currentTarget) && (evt.key === 'Enter' || evt.key === 'Space')) {
      dispatch(selectIngredient(data));
    }
  };

  return (
    <li className='list-item'>
      <article ref={dragRef} className={`${icStyles.card} ${isOnTheWay ? icStyles.card_dragged : ''}`}>
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
          tabIndex={0}
          onClick={handleNameClick}
          onKeyPress={handleKeyPressOnName}>
          {name}
        </button>
      </article>
    </li>
  );
};

export default IngredientCard;
