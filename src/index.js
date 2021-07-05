//module.exports = 
function check(str, bracketsConfig) {
  console.log(str.length % 2);
  if (str.length % 2 !== 0) return false;
  let flat = bracketsConfig.flat().join('');
  console.log(flat);
  while (flat) {
    let expr = flat.slice(2);
    if (str.lastIndexOf('(') === -1)
      console.log(str.lastIndexOf('('));
    console.log(str.lastIndexOf('('));
    flat = expr;
    console.log(expr);
  }
  return true;
}

//const config2 = [['(', ')'], ['[', ']']];

//check('((()))()', config2);
