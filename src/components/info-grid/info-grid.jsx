import React from 'react';
import PropTypes from 'prop-types';

import '@ya.praktikum/react-developer-burger-ui-components';
import igStyles from './info-grid.module.css';

const InfoGrid = ({ pendingOrders, doneOrders }) => (
  <main className={igStyles.info}>
    <section className={igStyles.info__column}>
      <h2 className={`${igStyles.info__heading} text text_type_main-medium pb-6`}>Готовы:</h2>
      <ul className={igStyles.info__data}>
        {doneOrders.map((number) => (
          <li key={number} className={igStyles.info__number}>
            <p className='text text_type_digits-default text_color_success'>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </section>
    <section className={igStyles.infoGrid__column}>
      <h2 className={`${igStyles.infoGrid__heading} text text_type_main-medium pb-6`}>В работе:</h2>
      <ul className={igStyles.infoGrid__data}>
        {pendingOrders.map((number) => (
          <li key={number} className={igStyles.infoGrid__number}>
            <p className='text text_type_digits-default'>
              {number}
            </p>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

InfoGrid.propTypes = {
  pendingOrders: PropTypes.arrayOf(PropTypes.number).isRequired,
  doneOrders: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default InfoGrid;
