// groups an array by groupKeys properties, and sums on sumKeys properties
const groupAndSum = (arr, groupKeys, sumKeys) => {
  return Object.values(
    arr.reduce((acc, curr) => {
      const group = groupKeys.map((k) => curr[k]).join("-");
      acc[group] =
        acc[group] ||
        Object.fromEntries(
          groupKeys.map((k) => [k, curr[k]]).concat(sumKeys.map((k) => [k, 0]))
        );
      sumKeys.forEach((k) => (acc[group][k] += curr[k]));
      return acc;
    }, {})
  );
};

export default groupAndSum;
