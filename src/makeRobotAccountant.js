'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let evenOdd = 0;

  return (a) => {
    return (b) => {
      evenOdd++;

      if (evenOdd <= 3) {
        return a + b;
      }

      if (evenOdd % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
