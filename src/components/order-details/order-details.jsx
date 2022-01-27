import React from 'react';
import PropTypes from 'prop-types';

import odStyles from './order-details.module.css';
import AcceptedImg from '../../assets/images/order-accepted.png';

const OrderDetails = ({ no }) => (
  <div className={`${odStyles.content} pl-25 pr-25`}>
    <h3 className={`${odStyles.order} text text_type_digits-large pt-4 pb-4`}>{no}</h3>
    <p className={`${odStyles.caption} text text_type_main-medium pt-4 pb-15`}>Идентификатор заказа</p>
    <img src={AcceptedImg} alt='Заказ принят!' />
    <p className={`${odStyles.message} text text_type_main-default pt-15 pb-1`}>Ваш заказ начали готовить</p>
    <p className={`${odStyles.cutline} text text_type_main-default text_color_inactive pt-1 pb-20`}>
      Дождитесь готовности на
      орбитальной станции
    </p>
  </div>
);

OrderDetails.propTypes = {
  no: PropTypes.string.isRequired,
};

export default OrderDetails;
