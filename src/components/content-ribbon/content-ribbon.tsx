import React, { FC } from 'react';

import { useSelector } from '../../services/store/hooks';
import crStyles from './content-ribbon.module.css';
import { TRibbonItemIngredient } from '../../types/types';
import { prepareIngredientsForRibbonItem } from '../../services/helpers';
import { TContentRibbonProps } from '../../types/components.props.types';

const ContentRibbon : FC<TContentRibbonProps> = ({ content }) => {
  const ingredients = useSelector((state) => state?.ingredients?.all);
  const showContent = prepareIngredientsForRibbonItem(content);
  const goFurther = content.length > 6;
  const moreIngredients = content.length - 6;

  return (
    <ul className={crStyles.ribbon}>
      {showContent.map((item : TRibbonItemIngredient) => {
        if (!ingredients || !ingredients[item._id]) return null;
        return (
          <li key={item.key} className={crStyles.ribbon__item}>
            <img
              className={crStyles.ribbon_pic}
              src={ingredients[item._id].image_mobile}
              alt={ingredients[item._id].name} />
          </li>
        );
      })}
      {goFurther ? (
        <li key={7} className={crStyles.ribbon__item}>
          <p className='text text_type_main-default'>{`+${moreIngredients}`}</p>
        </li>
      ) : null }
    </ul>
  );
};

export default ContentRibbon;
