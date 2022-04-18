import { CREATED, DONE, PENDING } from '../constants';

const statusName = (stage) => {
  switch (stage) {
    case CREATED: {
      return 'Создан';
    }
    case PENDING: {
      return 'Готовится';
    }
    case DONE: {
      return 'Выполнен';
    }
    default: {
      throw new TypeError('Неверная стадия приготовления!');
    }
  }
};

export default statusName;
