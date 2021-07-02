'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sumOfCalls = 0;
  const robotCount = firstValue => {
    return secondValue => {
      if (sumOfCalls < 3 || sumOfCalls % 2 === 0) {
        sumOfCalls++;

        return firstValue + secondValue;
      } else {
        sumOfCalls++;

        return 'Bzzz... Error!';
      }
    };
  };

  return robotCount;
}

module.exports = makeRobotAccountant;
