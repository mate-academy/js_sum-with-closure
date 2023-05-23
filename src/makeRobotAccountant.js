'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  let sum;

  return (a) => {
    sum = 0;

    return (b) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      sum = a + b;

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
