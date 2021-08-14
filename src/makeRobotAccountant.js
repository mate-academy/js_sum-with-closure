'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let evenOdd = 0;

  return (a) => {
    return (b) => {
      if (evenOdd < 3) {
        evenOdd++;

        return a + b;
      }

      if (evenOdd % 2 === 1) {
        evenOdd++;

        return 'Bzzz... Error!';
      }

      evenOdd++;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
