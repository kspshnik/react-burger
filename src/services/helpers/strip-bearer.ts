import { JWT_HEAD, JWT_POS } from '../../constants';

const stripBearer = (accessToken : string) : string => {
  if (accessToken.indexOf(JWT_HEAD) === 0) {
    return accessToken.slice(JWT_POS);
  }
  return '';
};

export default stripBearer;
