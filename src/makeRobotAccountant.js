'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0; // licznik wywołań

  return function (a) {
    return function (b) {
      count += 1;

      const isEven = count % 2 === 0;
      const isAfterThree = count > 3;

      if (isAfterThree && isEven) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;

