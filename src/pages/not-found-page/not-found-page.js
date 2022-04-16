import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';
import nfStyles from './not-found-page.module.css';

const NotFoundPage = () => {
  const history = useHistory();
  const location = useLocation();

  const isIngredient = React.useMemo(
    () => location.state && location.state.ingredient,
    [location.state],
  );

  const onClickBack = () => {
    history.goBack();
  };

  return (
    <main className={nfStyles.main}>
      <h1 className='text text_type_digits-large text_color_error pb-15'>404</h1>
      <p className='text text_type_main-large text_color_primary pb-25'>{`В нашей бургерной нет такого ${isIngredient ? 'ингредиента' : 'столика'} :(`}</p>
      <Button type='primary' htmlType='button' size='large' name='back' onClick={onClickBack}>
        Возвращаемся назад!
      </Button>
    </main>
  );
};

export default NotFoundPage;
