import React, { useContext, useEffect, useState } from "react";

import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon, CurrencyIcon, Button, } from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientsContext from "../../contexts/ingredientsContext";

import bcStyles       from './burger-constructor.module.css';

import ScrollArea     from "../scroll-area/scroll-area";

const BurgerConstructor = ({order, minusCallback}) => {
  const ingredients = useContext(ingredientsContext);
  const [isDataLoaded, setDataState] = useState(false);
  const [bun, setBun] = useState({});
  useEffect(() => {
    if (!!ingredients && Object.keys(ingredients).length !== 0) {
      const isBun = order.some(item => ingredients[item].type === 'bun');
      if (isBun) {
         setBun(order.find(item => ingredients[item]?.type === 'bun'));
        } else {
        setBun(Object.values(ingredients).find((item) => ingredients[item]?.type === 'bun'));
      }
    }
  }, [ingredients, order]);

  useEffect(() => {
    setDataState(Object.keys(ingredients).length !== 0);
  },[ingredients]);

  return (
    <>
      {!isDataLoaded && <p className={bcStyles.loading}>Информация загружается...</p>}
      {isDataLoaded && <section className={`${bcStyles.section} pt-25`}>
        {!!bun && <div className="pb-2">
            <ConstructorElement type="top"
                             isLocked={true}
                             text={`${ingredients[ bun ]?.name} (верх)`}
                             thumbnail={ingredients[ bun ]?.image_mobile}
                             price={ingredients[ bun ]?.price}/>
        </div>}
        <ScrollArea contentClass={`${bcStyles.scroll} custom-scroll`}>
          <ul className={bcStyles.grid}>
              {order.filter((item) => ingredients[item]?.type === 'sauce')
                    .concat(order.filter((item) => ingredients[item]?.type === 'main'))
                    .map((item, index) => {
                const {_id, name, price, image_mobile} = ingredients[item];
                return (
                <li className={`${bcStyles.item} p-2`} key={`${_id}-${index}`}>
                  <div className={`${bcStyles.drag} pr-1`}>
                    <DragIcon type="secondary" />
                  </div>
                <ConstructorElement
                                        isLocked={false}
                                        text={name}
                                        price={price}
                                        thumbnail={image_mobile}
                                        handleClose={() => minusCallback(_id)}/>
                </li>)})}
          </ul>
        </ScrollArea>
        {!!bun && <div className="pt-2 pb-10">
           <ConstructorElement type="bottom"
                             isLocked={true}
                             text={`${ingredients[ bun ]?.name} (низ)`}
                             thumbnail={ingredients[ bun ]?.image_mobile}
                             price={ingredients[ bun ]?.price}/>
        </div>}

        <footer className={bcStyles.footer}>
          <div className={`${bcStyles.price} mr-10`}>
            <p className='text text_type_digits-medium pr-2'>
              {order.reduce((total, item) => {
                total += ingredients[item].price;
                return  total;
              }, ingredients[bun]?.price)}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="medium">Оформить заказ</Button>
        </footer>
      </section>}
    </>
  )
}

BurgerConstructor.propTypes = {
  order         : PropTypes.arrayOf(PropTypes.string).isRequired,
  minusCallback : PropTypes.func.isRequired
};

export default BurgerConstructor;
