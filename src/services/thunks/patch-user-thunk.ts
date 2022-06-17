import { AxiosError } from 'axios';
import { patchUser } from '../api';
import { profileUpdateFailed, profileUpdateSucceed, setUser } from '../store';
import { EXPIRY_MESSAGE } from '../../constants';
import refreshTokenThunk from './refresh-token-thunk';
import { AppThunk } from '../store/store';
import { getAxiosErrorMessage } from '../helpers';
import { TAPIError } from '../../types/api.types';

const patchUserThunk : AppThunk = () => async (dispatch, getState) => {
  const { forms: { profile } } = getState();

  try {
    const {
      data: {
        success, user = null, message = 'Неизвестная ошибка при обновлении профиля :(',
      },
    } = await patchUser(profile);
    if (success && !!user) {
      dispatch(setUser(user));
      dispatch(profileUpdateSucceed('Вы успешно обновили профиль!'));
    } else if (!success && (message === EXPIRY_MESSAGE)) {
      dispatch(refreshTokenThunk(patchUserThunk));
    } else {
      dispatch(profileUpdateFailed(message));
    }
  } catch (err) {
    const message = getAxiosErrorMessage(err as AxiosError<TAPIError>)
      ?? 'Неизвестная ошибка при входе в систему :(';
    dispatch(profileUpdateFailed(message));
  }
};

export default patchUserThunk;
