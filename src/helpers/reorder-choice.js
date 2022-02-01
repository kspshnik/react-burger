const reorderChoice = (ingrs, from, to) => {
  const result = [];
  const el = ingrs[from];
  if (from === to) {
    return ingrs;
  }
  for (let i = 0; i < ingrs.length; i += 1) {
    if (i !== from) {
      if ((to < from) && (i === to)) {
        result.push(el);
      }
      result.push(ingrs[i]);
      if ((to > from) && (i === to)) {
        result.push(el);
      }
    }
  }
  return result;
};

export default reorderChoice;
