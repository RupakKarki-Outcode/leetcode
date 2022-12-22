/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = romanValues[s[s.length - 1]];

  for (let i = s.length - 2; i >= 0; i--) {
    const leftValue = romanValues[s.charAt(i)];
    const rightValue = romanValues[s.charAt(i + 1)];

    if (leftValue < rightValue) {
      result -= leftValue;
    } else {
      result += leftValue;
    }
  }
  return result;
};
