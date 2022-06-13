import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from '../../services/store/hooks';
import nfStyles from './not-found-page.module.css';
import { REASON_404_GENERAL } from '../../constants';
import { clearOrderNotFound } from '../../services/store';
import { TLocationState } from '../../types/types';

const NotFoundPage = () => {
  const history = useHistory();
  const location = useLocation<TLocationState>();
  const dispatch = useDispatch();

  const reasonFor404 = location?.state?.reasonFor404 || REASON_404_GENERAL;

  React.useEffect(() => {
    dispatch(clearOrderNotFound());
  }, [dispatch]);

  const onClickBack = () => {
    history.push({ pathname: location.state.wayback || '/', state: { reasonFor404: null, wayback: null } });
  };

  return (
    <main className={nfStyles.main}>
      <h1 className='text text_type_digits-large text_color_error pb-15'>404</h1>
      <p className='text text_type_main-large text_color_primary pb-25'>{`В нашей бургерной нет такого ${reasonFor404}а! :(`}</p>
      <Button type='primary' htmlType='button' size='large' name='back' onClick={onClickBack}>
        {`${location?.state?.wayback ? 'Возвращаемся назад!' : 'На главную!'}`}
      </Button>
    </main>
  );
};

export default NotFoundPage;
