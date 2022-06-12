import { AxiosError } from 'axios';
import { TAPIError } from '../../types/api.types';

const getAxiosErrorMessage = (error : AxiosError<TAPIError>) : string | null => {
  let errorMessage : string | null = null;
  if (error.response) {
    errorMessage = error.response.data.message ? error.response.data.message : null;
  } else {
    errorMessage = error.message ? error.message : null;
  }
  return errorMessage;
};

export default getAxiosErrorMessage;
