import { React } from 'react';
import PropTypes from 'prop-types';

import '@ya.praktikum/react-developer-burger-ui-components';

import { Link } from 'react-router-dom';
import lbStyles from './link-box.module.css';

const LinkBox = ({
  caption, linkName, linkTo, extraClasses,
}) => (
  <div className={`${lbStyles.linkbox} ${extraClasses}`}>
    <p className='text_type_main-default'>{caption}</p>
    <Link className={`${lbStyles.linkbox__link} ml-2`} to={linkTo}>{linkName}</Link>
  </div>
);

LinkBox.propTypes = {
  caption: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  extraClasses: PropTypes.string.isRequired,
};

export default LinkBox;
