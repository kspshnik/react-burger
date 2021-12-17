import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientsContext from '../../contexts/ingredientsContext';

import bcStyles from './burger-constructor.module.css';

import ScrollArea from '../scroll-area/scroll-area';
import Preloader from '../preloader/preloader';
import ConstructorGrid from '../constructor-grid/constructor-grid';

const BurgerConstructor = ({ order, minusCallback }) => {
  const ingredients = useContext(ingredientsContext);
  const [isDataLoaded, setDataState] = useState(false);
  const [bun, setBun] = useState(null);

  const calculateTotal = () => order.reduce(
    (total, item) => total + ingredients[item].price,
    ingredients[bun]?.price,
  );

  useEffect(() => {
    if (ingredients) {
      if (order.some((item) => ingredients[item]?.type === 'bun')) {
        setBun(order.find((item) => ingredients[item]?.type === 'bun'));
      } else {
        setBun(Object.values(ingredients).find((item) => ingredients[item]?.type === 'bun'));
      }
    }
  }, [ingredients, order]);

  useEffect(() => {
    setDataState(!!ingredients);
  }, [ingredients]);

  return (
    <>
      {!isDataLoaded && <div className={bcStyles.loading}><Preloader /></div>}
      {isDataLoaded && (
        <section className={`${bcStyles.section} mt-25 mb-10`}>
          <main className={bcStyles.wrapper}>
            {!!bun && (
              <div className='pb-2'>
                <ConstructorElement
                  type='top'
                  isLocked
                  text={`${ingredients[bun]?.name} (верх)`}
                  thumbnail={ingredients[bun]?.image_mobile}
                  price={ingredients[bun]?.price} />
              </div>
            )}
            <ScrollArea contentClass={`${bcStyles.scroll} custom-scroll`}>
              <ConstructorGrid minusCallback={minusCallback} order={order} />
            </ScrollArea>
            {!!bun && (
              <div className='pt-2 pb-10'>
                <ConstructorElement
                  type='bottom'
                  isLocked
                  text={`${ingredients[bun]?.name} (низ)`}
                  thumbnail={ingredients[bun]?.image_mobile}
                  price={ingredients[bun]?.price} />
              </div>
            )}
          </main>
          <footer className={`${bcStyles.footer} mb-3 mr-5`}>
            <div className={`${bcStyles.price} mr-10`}>
              <p className='text text_type_digits-medium pr-2'>
                {calculateTotal()}
              </p>
              <CurrencyIcon type='primary' />
            </div>
            <Button type='primary' size='medium'>Оформить заказ</Button>
          </footer>
        </section>
      )}
    </>
  );
};

BurgerConstructor.propTypes = {
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
  minusCallback: PropTypes.func.isRequired,
};

export default BurgerConstructor;
