'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (y) => {
    return (x) => {
      count += y;

      if (count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
