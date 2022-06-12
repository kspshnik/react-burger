import React, { useState } from 'react';

import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector }                        from 'react-redux';
import { setProfileEmail, setProfileName, setProfilePass } from '../../services/actionCreators';
import { emailValidity, nameValidity, passwordValidity } from '../../services/helpers';
import { patchUserThunk, setProfileForm }                from '../../services/thunks';

import pfStyles from './profile-form.module.css';

const ProfileForm = () => {
  const dispatch = useDispatch();

  const { name, email, password } = useSelector((store) => store.forms.profile);
  const user = useSelector((store) => store.user);

  const [isNameValid, setNameValidity] = useState(false);
  const [isEmailValid, setEmailValidity] = useState(false);
  const [isPasswordValid, setPasswordValidity] = useState(false);

  const isFormValid = () => (isNameValid || name === user?.name)
                            && (isPasswordValid || password === '')
                            && (isEmailValid || email === user?.email);
  const isFormChanged = () => (user?.name !== name && name !== '')
                              || (user?.email !== email && email !== '')
                              || password !== '';
  const isProfileReady = () => isFormValid() && isFormChanged;
  const nameToGo = () => ((!!name && name !== user.name && isNameValid) ? name : null);
  const emailToGo = () => ((!!email && email !== user.email && isEmailValid) ? email : null);
  const passwordToGo = () => ((!!password && isPasswordValid) ? password : null);

  const onNameChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setProfileName(value));
    setNameValidity(valid && nameValidity(value));
  };
  const onEmailChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setProfileEmail(value));
    setEmailValidity(valid && emailValidity(value));
  };

  const onPasswordChange = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setProfilePass(value));
    setPasswordValidity(valid && passwordValidity(value));
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(patchUserThunk(nameToGo(), emailToGo(), passwordToGo()));
  };

  const onReset = (evt) => {
    evt.preventDefault();
    dispatch(setProfileForm());
  };

  React.useEffect(() => {
    dispatch(setProfileForm());
    return () => dispatch(setProfileForm());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(setProfileForm());
  }, [dispatch, user.name, user.email]);

  return (
    <form className={`${pfStyles.form} `} onSubmit={onSubmit} onReset={onReset}>
      <fieldset className={`${pfStyles.form__fieldset} pt-3 pb-3`}>
        <Input type='text' name='name' value={name} placeholder='Имя' onChange={onNameChange} icon='EditIcon' />
        <Input type='email' value={email} name='email' onChange={onEmailChange} placeholder='Логин' icon='EditIcon' />
        <PasswordInput value={password} name='password' onChange={onPasswordChange} />
      </fieldset>
      {isFormChanged
     && (
       <div className={pfStyles.profile__buttons}>
         <Button type='primary' htmlType='submit' size='medium' disabled={!isProfileReady()}>Сохранить</Button>
         <Button type='primary' htmlType='reset' size='medium' disabled={false}>Отмена</Button>
       </div>
     )}
    </form>
  );
};

export default ProfileForm;
