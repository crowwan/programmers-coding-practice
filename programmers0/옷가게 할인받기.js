function solution(price) {
  if (price / 100000 < 1) return price;
  else if (price / 100000 < 3) return discounted(price, 0.05);
  else if (price / 100000 < 5) return discounted(price, 0.1);
  return discounted(price, 0.2);
}
function discounted(price, d) {
  return parseInt(price - price * d);
}
