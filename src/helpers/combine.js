function combine(a, min) {
  function fn(n, src, got, all) {
    const selfAll = all;
    if (n === 0) {
      if (got.length > 0) {
        selfAll[all.length] = got;
      }
      return;
    }
    for (let j = 0; j < src.length; j += 1) {
      fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
    }
  }
  const all = [];
  for (let i = min; i < a.length; i += 1) {
    fn(i, a, [], all);
  }
  all.push(a);
  return all;
}

export default combine;
