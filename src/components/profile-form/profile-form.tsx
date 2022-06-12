import React, {useState, FC, ChangeEventHandler, FormEventHandler} from 'react';

import { Button, Input, PasswordInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector }                        from '../../services/store/hooks';
import { setProfileEmail, setProfileName, setProfilePass } from '../../services/store';
import { emailValidity, nameValidity, passwordValidity } from '../../services/helpers';
import { patchUserThunk, setProfileForm }                from '../../services/thunks';

import pfStyles from './profile-form.module.css';

const ProfileForm : FC = () => {
  const dispatch = useDispatch();

  const { name, email, password } = useSelector((store) => store.forms.profile);
  const user = useSelector((store) => store.user);

  const [isNameValid, setNameValidity] = useState<boolean>(false);
  const [isEmailValid, setEmailValidity] = useState<boolean>(false);
  const [isPasswordValid, setPasswordValidity] = useState<boolean>(false);

  const isFormValid = () : boolean => (isNameValid || name === user?.name)
                            && (isPasswordValid || password === '')
                            && (isEmailValid || email === user?.email);
  const isFormChanged = () : boolean => (user?.name !== name && name !== '')
                              || (user?.email !== email && email !== '')
                              || password !== '';
  const isProfileReady = () : boolean => isFormValid() && isFormChanged();
  const nameToGo = () : string | null => (
    (!!name && name !== user.name && isNameValid) ? name : null
  );
  const emailToGo = () : string | null => (
    (!!email && email !== user.email && isEmailValid) ? email : null
  );
  const passwordToGo = () : string | null => (
    (!!password && isPasswordValid) ? password : null
  );

  const onNameChange : ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setProfileName(value));
    setNameValidity(valid && nameValidity(value));
  };
  const onEmailChange : ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setProfileEmail(value));
    setEmailValidity(valid && emailValidity(value));
  };

  const onPasswordChange : ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, validity: { valid } } = evt.target;
    dispatch(setProfilePass(value));
    setPasswordValidity(valid && passwordValidity(value));
  };

  const onSubmit : FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(patchUserThunk(nameToGo(), emailToGo(), passwordToGo()));
  };

  const onReset : FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    dispatch(setProfileForm());
  };

  React.useEffect(() => {
    dispatch(setProfileForm());
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
      {isFormChanged()
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
