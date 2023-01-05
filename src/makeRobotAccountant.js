'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (x) => {
    count++;

    return (y) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
