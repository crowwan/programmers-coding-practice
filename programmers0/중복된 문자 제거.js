function solution(my_string) {
  const setStr = new Set(my_string);
  return [...setStr].join("");
}
