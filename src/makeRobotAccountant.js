'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;
  const maxCalls = 3;

  return (firstNum) => {
    countOfCalls++;

    return (secondNum) => {
      if (countOfCalls <= maxCalls || countOfCalls % 2 !== 0) {
        return firstNum + secondNum;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
