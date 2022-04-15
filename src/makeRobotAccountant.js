'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (digit) => {
    count++;

    const adder = (digit2) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return digit + digit2;
    };

    return adder;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
