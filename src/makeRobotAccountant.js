'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return (firstNum) => {
    countCalls++;

    return (secondNum) =>
      countCalls < 4 || countCalls % 2
        ? firstNum + secondNum
        : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
