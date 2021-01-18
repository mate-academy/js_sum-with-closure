'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 1;

  return (number1) => {
    return (number2) => {
      if (call <= 3 || call % 2 === 1) {
        ++call;

        return number1 + number2;
      };

      ++call;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
