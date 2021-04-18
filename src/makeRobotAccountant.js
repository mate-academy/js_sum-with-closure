'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const result = (x) => {
    return (y) => {
      const sum = x + y;

      count++;

      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return sum;
        }
      }

      return sum;
    };
  };

  return result;
}

module.exports = makeRobotAccountant;
