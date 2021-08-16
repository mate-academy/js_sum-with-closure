'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  const getSum = (num1) => {
    callCounter++;

    return function(num2) {
      if (callCounter < 3 || callCounter % 2 !== 0) {
        return num1 + num2;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
