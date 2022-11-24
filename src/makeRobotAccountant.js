'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCounter = 0;

  return function(firstNumber) {
    callsCounter++;

    if (callsCounter > 3 && callsCounter % 2 === 0) {
      return function() {
        return 'Bzzz... Error!';
      };
    }

    return function(secondNumber) {
      return firstNumber + secondNumber;
    };
  };
}

module.exports = makeRobotAccountant;
