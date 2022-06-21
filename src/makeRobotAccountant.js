'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;
  let counter = 0;

  return (x) => {
    return (y) => {
      sum = x + y;
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return sum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
