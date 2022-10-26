'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  function getSum(y) {
    return function(x) {
      counter++;

      if (counter > 3 && isEven(counter)) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  }

  return getSum;
}

const isEven = (digit) => {
  return digit % 2 === 0;
};

module.exports = makeRobotAccountant;
