import React, { useEffect } from 'react';

import { Button, ConstructorElement, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { useSelector, useDispatch } from 'react-redux';

import { useDrop } from 'react-dnd';
import bcStyles from './burger-constructor.module.css';
import ScrollArea from '../scroll-area/scroll-area';
import ConstructorGrid from '../constructor-grid/constructor-grid';
import placeOrder from '../../services/thunks/place-order';
import { insertInterior, setBun } from '../../services/actionCreators';
import { BUN, INGREDIENT } from '../../constants';

const BurgerConstructor = () => {
  const { all } = useSelector((store) => store.ingredients);
  const { bun, choice } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  // eslint-disable-next-line no-use-before-define
  const onDrop = () => handleDrop();

  const [{ isOver, dropItem }, dropRef] = useDrop({
    accept: INGREDIENT,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      dropItem: monitor.getItem(),
    }),
    drop: onDrop,
  });

  function handleDrop() {
    if (dropItem.type === BUN) {
      dispatch(setBun(dropItem));
    } else {
      dispatch(insertInterior(dropItem, 0));
    }
  }
  const calculateTotal = React.useMemo(() => {
    if (!(!!all && !!bun)) {
      return 0;
    }
    const bunsPrice = bun.price * 2;
    return choice.filter((item) => item.type !== 'bun').reduce(
      (total, item) => total + item.price,
      bunsPrice,
    );
  }, [choice, bun, all]);

  const handlePlaceOrderClick = () => {
    const totalOrder = [bun, ...[choice]].map(((item) => item._id));
    dispatch(placeOrder(totalOrder));
  };

  useEffect(() => {
    if (all && !bun) {
      dispatch(setBun(Object.values(all).find((item) => item?.type === 'bun')));
    }
  }, [all, bun, dispatch]);

  return (
    <section className={`${bcStyles.section} mt-25 mb-10`}>
      <main ref={dropRef} className={`${bcStyles.wrapper} ${isOver ? bcStyles.wrapper_engaged : ''}`}>
        {!!bun && (
        <div className='pb-2'>
          <ConstructorElement
            type='top'
            isLocked
            text={`${bun?.name} (верх)`}
            thumbnail={bun?.image_mobile}
            price={bun.price} />
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
            text={`${bun?.name} (низ)`}
            thumbnail={bun?.image_mobile}
            price={bun?.price} />
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
          onClick={handlePlaceOrderClick}
          disabled={!bun || choice.length < 1}>
          Оформить
          заказ
        </Button>
      </footer>
    </section>
  );
};

export default BurgerConstructor;
