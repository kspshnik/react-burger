import React from 'react';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import crStyles from './content-ribbon.module.css';

const ContentRibbon = ({ content }) => {
  const ingredients = useSelector((state) => state?.ingredients?.all);
  const showContent = content.filter((item) => !!item).slice(0, 7).reverse();
  const goFurther = content.length > 6;
  const moreIngredients = content.length - 6;

  return (
    <ul className={crStyles.ribbon}>
      {showContent.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index} className={crStyles.ribbon__item}>
          <img
            className={crStyles.ribbon_pic}
            src={ingredients[item].image_mobile}
            alt={ingredients[item].name} />
        </li>
      ))}
      {goFurther ? (
        <li key={8} className={crStyles.ribbon__item}>
          <p className='text text_type_main-default'>{`+${moreIngredients}`}</p>
        </li>
      ) : null }
    </ul>
  );
};

ContentRibbon.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ContentRibbon;
