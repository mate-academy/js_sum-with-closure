'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumOfCalls = 1;
  const robotCount = firstValue => {
    sumOfCalls++;

    return secondValue => {
      if (sumOfCalls <= 3 || sumOfCalls % 2 === 0) {
        return firstValue + secondValue;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return robotCount;
}

module.exports = makeRobotAccountant;
