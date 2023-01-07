function solution(today, terms, privacies) {
  const termMap = {};
  const ex = new Date(today);

  for (const a of terms) {
    const ar = a.split(" ");
    termMap[ar[0]] = +ar[1];
  }

  const res = [];
  privacies.forEach(function (a, i) {
    const [d, type] = a.split(" ");
    const corD = new Date(d);

    corD.setMonth(corD.getMonth() + termMap[type]);

    if (corD <= ex) res.push(i + 1);
  });

  return res;
}
