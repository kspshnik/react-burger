import { TAPIUserProfile } from '../../types/api.types';

const makeUser = (userData : TAPIUserProfile) : TAPIUserProfile => {
  const { name = null, email = null, password = null } = userData;
  let res : TAPIUserProfile = {};
  if (name) {
    res = { ...res, name };
  }
  if (email) {
    res = { ...res, email };
  }
  if (password) {
    res = { ...res, password };
  }
  return res;
};

export default makeUser;
