function solution(age) {
  const al = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  return [...(age + "")].map((a) => al[a]).join("");
}

function solution(age) {
  const arr = [...(age + "")].map((a) => +a + 97);
  return String.fromCharCode(...arr);
}
