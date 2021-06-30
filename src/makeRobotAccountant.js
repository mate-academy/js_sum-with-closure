'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 1;

  return (x) => {
    return (y) => {
      if (counter <= 3 || (counter % 2) !== 0) {
        counter++;

        return x + y;
      }

      counter++;

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
