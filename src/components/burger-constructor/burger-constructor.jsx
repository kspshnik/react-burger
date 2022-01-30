import React, { useEffect } from 'react';

import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSelector, useDispatch } from 'react-redux';

import bcStyles from './burger-constructor.module.css';
import ScrollArea from '../scroll-area/scroll-area';
import ConstructorGrid from '../constructor-grid/constructor-grid';
import placeOrder from '../../services/thunks/place-order';
import { setBun } from '../../services/actionCreators';

const BurgerConstructor = () => {
  const ingredients = useSelector((store) => store.ingredients.all);
  const { bun, choice } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const calculateTotal = React.useMemo(() => {
    if (!(!!ingredients && !!bun && choice.length > 0 && !!ingredients[bun])) {
      return 0;
    }
    const bunsPrice = bun.price * 2;
    return choice.filter((item) => ingredients[item]?.type !== 'bun').reduce(
      (total, item) => total + ingredients[item].price,
      bunsPrice,
    );
  }, [choice, bun, ingredients]);

  const handlePlaceOrderClick = () => dispatch(placeOrder([bun, ...[choice]]));

  useEffect(() => {
    if (ingredients && !bun) {
      dispatch(setBun(Object.values(ingredients).find((item) => ingredients[item]?.type === 'bun')));
    }
  }, [ingredients, bun, dispatch]);

  return (
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
          <ConstructorGrid />
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
  );
};

export default BurgerConstructor;
