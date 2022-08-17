'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let countOfAcounting = 0;

  const getSum = (a) => {
    let sum = a;

    countOfAcounting++;

    return function(b) {
      sum += b;

      if (countOfAcounting > 3 && countOfAcounting % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
