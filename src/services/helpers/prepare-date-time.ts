const prepareDateTime = (createdAt : string) : string => {
  const timestamp = new Date(createdAt);
  const msecsInHour = 1000 * 60 * 60;
  const now = new Date();
  const fixTail = (days : number) => {
    const lastDigit = days % 10;
    switch (lastDigit) {
      case 1: return 'день';
      case 2:
      case 3:
      case 4: return 'дня';
      default: return 'дней';
    }
  };
  const prepareDays = (day : number) => {
    switch (day) {
      case 0: return 'Сегодня';
      case 1: return 'Вчера';
      case 11:
      case 12:
      case 13:
      case 14: return `${day} дней назад`;
      default: return `${day} ${fixTail(day)} назад`;
    }
  };
  const delta = +now - +timestamp;
  const deltaHours = Math.trunc(delta / msecsInHour);
  const burgerTZ = timestamp.getTimezoneOffset() / -60;
  return `${prepareDays(deltaHours)}, ${timestamp.getHours()}:${timestamp.getMinutes()} i-GMT${(burgerTZ < 0) ? '-' : '+'}${burgerTZ}`;
};
export default prepareDateTime;
