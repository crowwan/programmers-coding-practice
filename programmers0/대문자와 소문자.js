function solution(my_string) {
  let str = "";
  for (const a of my_string) {
    if (a === a.toUpperCase()) str += a.toLowerCase();
    else str += a.toUpperCase();
  }
  return str;
}
