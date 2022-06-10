const nameValidity = (name : string) : boolean => name.length > 2;
const emailValidity = (email : string) : boolean => !!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
const passwordValidity = (password : string) : boolean => password.length > 5;
export { nameValidity, emailValidity, passwordValidity };
