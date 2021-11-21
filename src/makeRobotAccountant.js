'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCallFuncrion = 0;

  const getSum = (firstValue) => {
    countCallFuncrion++;

    return function(secondValue) {
      if (countCallFuncrion > 3 && !(countCallFuncrion % 2)) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
