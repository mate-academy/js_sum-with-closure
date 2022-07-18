'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  return (firstNum) => {
    return (secondNum) => {
      countOfCalls++;

      if ((countOfCalls % 2 === 0) && (countOfCalls > 3)) {
        return 'Bzzz... Error!';
      }

      return firstNum + secondNum;
    };
  };
}

module.exports = makeRobotAccountant;
