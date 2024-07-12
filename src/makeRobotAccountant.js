'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (x) => {
    return (y) => {
      counter++;

      if (counter <= 3 || (counter % 2 === 1)) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
