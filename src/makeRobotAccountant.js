'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  return (num1) => {
    return (num2) => {
      countOfCalls++;

      const result = ((countOfCalls <= 3) || (countOfCalls % 2 === 1))
        ? num1 + num2
        : 'Bzzz... Error!';

      return result;
    };
  };
}

module.exports = makeRobotAccountant;
