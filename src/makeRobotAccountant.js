'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 1;

  const getSum = (num) => {
    return (sum) => {
      if (callCounter >= 4 && callCounter % 2 === 0) {
        callCounter++;

        return 'Bzzz... Error!';
      }
      callCounter++;

      return sum + num;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
