import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';

import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import ingredientsContext from '../../contexts/ingredientsContext';

import bcStyles from './burger-constructor.module.css';

import ScrollArea from '../scroll-area/scroll-area';
import Preloader from '../preloader/preloader';
import ConstructorGrid from '../constructor-grid/constructor-grid';

const BurgerConstructor = ({ order, minusCallback, plusCallback }) => {
  const ingredients = useContext(ingredientsContext);
  const [isDataLoaded, setDataState] = useState(false);
  const [bun, setBun] = useState(null);

  const calculateTotal = React.useMemo(() => ((!!ingredients && !!bun) ? order.reduce(
    (total, item) => {
      console.log(`В подсчёте общей суммы. \n!!ingredients = ${!!ingredients}, !!bun = ${!!bun}.\nitem = '${item}', total = ${total}./n ingredients.[item]:`);
      console.dir(ingredients[item]);
      return total + ingredients[item].price;
    },
    ingredients[bun]?.price,
  ) : 0), [order, bun, ingredients]);

  useEffect(() => {
    console.log('Order in BurgerConstructor:');
    console.dir(order);
    console.log('Ingredients in BurgerConstructor:');
    console.dir(ingredients);
    if (ingredients && order.length > 0) {
      if (order.some((item) => ingredients[item]?.type === 'bun')) {
        console.log('Есть булка в заказе!');
        setBun(order.find((item) => ingredients[item]?.type === 'bun'));
      } else {
        console.log('Нет булки в заказе!');
        console.dir(Object.values(ingredients).find((item) => item.type === 'bun')?._id);
        console.log(Object.values(ingredients).find((item) => ingredients[item]?.type === 'bun')?._id);
        plusCallback(Object.values(ingredients).find((item) => item.type === 'bun')?._id);
      }
    }
  }, [ingredients, order, plusCallback]);

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
                {calculateTotal}
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
  plusCallback: PropTypes.func.isRequired,
};

export default BurgerConstructor;
