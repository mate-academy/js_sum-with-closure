'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  return (firstNum) => {
    callsCount++;

    return (secondNum) => {
      return callsCount < 3 || callsCount % 2
        ? firstNum + secondNum
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
