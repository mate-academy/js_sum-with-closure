'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const limit = 3;

  return (x) => {
    return (y) => {
      count++;

      if (count % 2 === 0 && count > limit) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}
module.exports = makeRobotAccountant;
