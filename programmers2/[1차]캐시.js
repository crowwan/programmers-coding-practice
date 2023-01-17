function solution(cacheSize, cities) {
  let res = 0;
  let cache = [];

  if (cacheSize === 0) return cities.length * 5;

  for (const a of cities) {
    const filtered = cache.filter((e) => e?.toLowerCase() !== a?.toLowerCase());
    if (filtered.length !== cache.length) {
      res += 1;
      filtered.push(a);
      cache = filtered;
    } else {
      res += 5;
      cache.length === cacheSize && cache.shift();
      cache.push(a);
    }
  }

  return res;
}
