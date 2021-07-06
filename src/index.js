module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 > 0) return false;

  let strLength = str.length;
  let brLength = bracketsConfig.length;
  
  for(let j = 0; j < strLength / 2; j++) {
    //one pair one time
    for (let i = 0; i < brLength; i++) {
      str = str.replace(bracketsConfig[i].join(''), '');
    }
  }
  return str.length > 0 ? false : true;
}
