import { nanoid } from 'nanoid';

const insertIngredient = (ingrs, ingr, to) => {
  if (!ingr && ingr === {}) {
    return ingrs;
  }

  return [...ingrs.slice(0, to),
    { ...ingr, bcid: nanoid() },
    ...ingrs.slice(to)];
};

export default insertIngredient;
