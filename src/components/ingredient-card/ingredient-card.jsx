
import React from "react";


import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import cardStyles from './ingredient-card.module.css';

const IngredientCard = ({id, name, price, count, img, plusCallback}) => {
  return (
    <li className="list-item">    <article className={`${cardStyles.card} `}>
      {count > 0 ? (<Counter size="default" count={count} />) : (<></>)}
      <img src={img} alt={name} className={cardStyles.image} />
      <div className={`${ cardStyles.pricing } p-2`}>
        <p className={`text text_type_digits-default mr-2`}>{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <h4 className={`text text_type_main-default`} onClick={() => {
        plusCallback(id);
      }}>{name}</h4>
    </article>
    </li>
  )
}

IngredientCard.defaultProps = {
  count: 0,
}

export default IngredientCard;
