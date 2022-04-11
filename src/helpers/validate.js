import { isEmail } from 'is-email';

const nameValidity = (name) => name.length > 2;
const emailValidity = (email) => isEmail(email);
export { nameValidity, emailValidity };
