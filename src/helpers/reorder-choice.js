const reorderChoice = (ingrs, from, to) => {
  let result;
  if (from === to) {
    return ingrs;
  } if (from < to) {
    result = [
      ...ingrs.slice(0, from),
      ...ingrs.slice(from + 1, to),
      ingrs[from],
      ...ingrs.slice(to)];
  } else {
    result = [
      ...ingrs.slice(0, to),
      ingrs[from],
      ...ingrs.slice(to + 1, from),
      ...ingrs.slice(from + 1)];
  }
  return result;
};

export default reorderChoice;
