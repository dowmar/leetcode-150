/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  console.log(s);
  let result = 0;
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    if (i === s.length - 1) {
      result += map[s[i]];
      return result;
    }
    if (map[s[i]] >= map[s[i + 1]]) {
      result += map[s[i]];
      console.log(result);
    } else {
      result += map[s[i + 1]] - map[s[i]];
      i++;
    }
  }
  return result;
};
