function solution(rsp) {
  const rspMap = {
    2: "0",
    0: "5",
    5: "2",
  };

  return [...rsp].reduce((a, b) => a + rspMap[b], "");
}
