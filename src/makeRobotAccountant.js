'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let count = 0;

  return function getSum(numA) {
    count++;

    return function add(numB) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return numA + numB;
    };
  };
}

module.exports = makeRobotAccountant;
