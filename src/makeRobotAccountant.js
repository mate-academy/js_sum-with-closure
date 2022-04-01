'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (x) => {
    const add = (y) => {
      if (count > 3 && (count % 2) === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };

    count++;

    return add;
  };

  return sum;
}

module.exports = makeRobotAccountant;
