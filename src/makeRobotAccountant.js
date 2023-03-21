'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  return function add(firstNumber) {
    return function anotherAdd(secondNumber) {
      numberOfCalls++;

      if (numberOfCalls >= 4 && numberOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
