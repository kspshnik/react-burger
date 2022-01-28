import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import IngredientsContext from '../../services/ingredientsContext';

import bcStyles from './burger-constructor.module.css';
import ScrollArea from '../scroll-area/scroll-area';
import Preloader from '../preloader/preloader';
import ConstructorGrid from '../constructor-grid/constructor-grid';

const BurgerConstructor = ({
  minusCallback, plusCallback, detailsCallback, order,
}) => {
  const ingredients = useContext(IngredientsContext);
  const [isDataLoaded, setDataState] = useState(false);
  const [bun, setBun] = useState(null);

  const calculateTotal = React.useMemo(() => ((!!ingredients && !!bun && order.length > 0)
    ? order.reduce(
      (total, item) => total + ingredients[item].price,
      ingredients[bun]?.price,
    )
    : 0), [order, bun, ingredients]);

  const handlePlaceOrderClick = () => detailsCallback(setBun);

  useEffect(() => {
    if (ingredients && order.length > 0) {
      if (order.some((item) => ingredients[item]?.type === 'bun')) {
        setBun(order.find((item) => ingredients[item]?.type === 'bun'));
      } else {
        plusCallback(Object.values(ingredients).find((item) => item.type === 'bun')?._id);
      }
    }
  }, [ingredients, order, plusCallback]);

  useEffect(() => {
    setDataState(Object.keys(ingredients).length > 0);
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
                {calculateTotal}
              </p>
              <CurrencyIcon type='primary' />
            </div>
            <Button
              type='primary'
              size='medium'
              onClick={handlePlaceOrderClick}>
              Оформить
              заказ
            </Button>
          </footer>
        </section>
      )}
    </>
  );
};

BurgerConstructor.propTypes = {
  order: PropTypes.arrayOf(PropTypes.string).isRequired,
  minusCallback: PropTypes.func.isRequired,
  plusCallback: PropTypes.func.isRequired,
  detailsCallback: PropTypes.func.isRequired,
};

export default BurgerConstructor;
