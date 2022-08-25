'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let index = 0;

  const getSum = (x) => {
    return function(y) {
      index++;

      if (index < 3 || index % 2 === 1) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
