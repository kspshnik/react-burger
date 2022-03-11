import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import formStyles from './form-wrapper.module.css';

const FormWrapper = ({
  headingText, buttonText, extraClasses, onSubmit, isValid, children,
}) => (
  <form className={`${formStyles.form} ${extraClasses}`} onSubmit={onSubmit}>
    <h2 className={`${formStyles.form__heading} text_type_main - medium`}>{headingText}</h2>
    <fieldset className={`${formStyles.form__fieldset} mb-6`}>
      {children}
    </fieldset>
    <Button type='primary' htmlType='submit' size='medium' disabled={!isValid}>{buttonText}</Button>
  </form>
);

export default FormWrapper;

FormWrapper.propTypes = {
  headingText: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  extraClasses: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element]).isRequired,
};
