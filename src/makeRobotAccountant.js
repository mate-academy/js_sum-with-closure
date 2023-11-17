'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let count = 0;

  return function(number1) {
    count++;

    if (count > 3 && count % 2 === 0) {
      return function() {
        return 'Bzzz... Error!';
      };
    } else {
      return function(number2) {
        return number1 + number2;
      };
    }
  };
}

module.exports = makeRobotAccountant;
