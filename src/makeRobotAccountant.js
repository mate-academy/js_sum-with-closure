'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  return function(firstNumber) {
    numberOfCalls++;

    return function(secondNumber) {
      if (numberOfCalls > 3 && numberOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
