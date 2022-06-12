import React from 'react';

import { useSelector } from '../../services/store/hooks';
import oaStyles from './order-accept.module.css';
import AcceptedImg from '../../assets/images/order-accepted.png';

const OrderAccept = () => {
  const orderNumber = useSelector((state) => state.orders.accepted?.order.number || null);
  return (
    <div className={`${oaStyles.content} pl-25 pr-25`}>
      <h3 className={`${oaStyles.order} text text_type_digits-large pt-4 pb-4`}>{orderNumber}</h3>
      <p className={`${oaStyles.caption} text text_type_main-medium pt-4 pb-15`}>Идентификатор заказа</p>
      <img src={AcceptedImg} alt='Заказ принят!' />
      <p className={`${oaStyles.message} text text_type_main-default pt-15 pb-1`}>Ваш заказ начали готовить</p>
      <p className={`${oaStyles.cutline} text text_type_main-default text_color_inactive pt-1 pb-20`}>
        Дождитесь готовности на
        орбитальной станции
      </p>
    </div>
  );
};

export default OrderAccept;
