'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let evenOdd = 0;

  return (firstInput) => {
    return (secondInput) => {
      evenOdd++;

      if (evenOdd <= 3) {
        return firstInput + secondInput;
      }

      if (evenOdd % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstInput + secondInput;
    };
  };
}

module.exports = makeRobotAccountant;
