'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const text = 'Bzzz... Error!';
  const calculate = (x) => {
    count++;

    const sum = (y) => {
      if (count > 3 && count % 2 === 0) {
        return text;
      } else {
        return x + y;
      }
    };

    return sum;
  };

  return calculate;
}
module.exports = makeRobotAccountant;
