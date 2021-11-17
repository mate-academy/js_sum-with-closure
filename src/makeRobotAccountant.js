'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (num) => {
    count++;

    return function(num1) {
      if (count > 3 && !(count % 2)) {
        return 'Bzzz... Error!';
      }

      return num + num1;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
