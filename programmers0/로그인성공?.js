function solution(id_pw, db) {
  const map = new Map(db);
  const [id, pw] = id_pw;

  if (map.get(id) && map.get(id) === pw) return "login";
  if (!map.get(id)) return "fail";
  else return "wrong pw";
}
