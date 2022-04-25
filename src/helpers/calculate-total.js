import { BUN } from '../constants';

const calculateTotal = (all, ingredients) => {
  const bun = ingredients.find((item) => all[item]?.type === BUN);
  const total = ingredients.reduce((acc, item) => {
    if (!item || !all[item] || !all[item]?.price) {
      return acc;
    }
    return acc + all[item].price;
  }, 0);
  const extra = (!!bun && !!all[bun].price) ? all[bun].price : 0;
  return total + extra;
};

export default calculateTotal;
