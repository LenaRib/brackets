module.exports = function check(str, bracketsConfig) {
  if (str.lrngth % 2 !== 0) return false;
  let flat = bracketsConfig.flat();
  while (flat) {
    let expr = flat.slice(2);
    cinsile.log(expr);
  }
  return true;
}
