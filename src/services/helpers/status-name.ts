import { CREATED, DONE, PENDING } from '../../constants';
import { TOrderStatus } from '../../types/types';

const statusName = (stage : TOrderStatus) : string => {
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
