import { nanoid } from 'nanoid';

const insertIngredient = (ingrs, ingr, to) => {
  if (!ingr && ingr === {}) {
    return ingrs;
  }

  return to === 0 ? [{ ...ingr, bcid: nanoid() }, ...ingrs] : [...ingrs.slice(0, to),
    { ...ingr, bcid: nanoid() },
    ...ingrs.slice(to)];
};

export default insertIngredient;
