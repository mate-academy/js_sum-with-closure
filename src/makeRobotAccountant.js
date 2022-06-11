'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const result = (x) => {
    count++;

    if (count > 3) {
      count -= 2;

      return () => {
        return 'Bzzz... Error!';
      };
    }

    if (count <= 3) {
      return (y) => x + y;
    }
  };

  return result;
}

module.exports = makeRobotAccountant;
