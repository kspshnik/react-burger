import React from 'react';

import { useSelector } from '../../services/store/hooks';
import cgStyles from './constructor-grid.module.css';

import ConstructorGridElement from '../constructor-grid-element/constructor-grid-element';

const ConstructorGrid = () => {
  const { choice } = useSelector((state) => state.orders);
  // filter((item) => (!now || (!!item.bcid && item.bcid !== now)))
  return (
    <ul className={cgStyles.grid}>
      {choice
        // eslint-disable-next-line max-len
        ?.map((item, index) => (<ConstructorGridElement item={{ ...item, index }} index={index} key={item.bcid} />))}
    </ul>

  );
};

export default ConstructorGrid;
