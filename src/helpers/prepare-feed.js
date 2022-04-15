const prepareFeed = (data) => {
  const {
    success, orders, total, totalToday,
  } = data;
  if (!success) {
    return {};
  }
  return {
    orders: orders.reduce((acc, order) => {
      acc[order._id] = order;
      return acc;
    }, {}),
    numbers: orders.map((order) => order.number),
    total,
    totalToday,
  };
};

export default prepareFeed;
