'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  return (firstNumber) => {
    countOfCalls++;

    return (secondNUmber) => {
      if (countOfCalls > 3 && countOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return firstNumber + secondNUmber;
      }
    };
  };
}

module.exports = makeRobotAccountant;
