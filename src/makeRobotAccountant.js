'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  return function(number1) {
    return function(number2) {
      count++;

      if (count <= 3 || count % 2 !== 0) {
        return number1 + number2;
      }

      return errorMessage;
    };
  };
}

module.exports = makeRobotAccountant;
