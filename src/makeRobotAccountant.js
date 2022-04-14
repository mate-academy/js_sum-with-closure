'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const errorMessage = 'Bzzz... Error!';
  let countOfCalls = 0;

  return (x) => {
    return (y) => {
      countOfCalls++;

      return countOfCalls <= 3 || countOfCalls % 2 === 1
        ? x + y
        : errorMessage;
    };
  };
}

module.exports = makeRobotAccountant;
