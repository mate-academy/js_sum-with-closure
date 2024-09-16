'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return function(number1) {
    return function(number2) {
      if (callCounter < 3) {
        callCounter++;

        return number1 + number2;
      } else {
        callCounter--;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
