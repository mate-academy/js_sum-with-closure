'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const sum = (a) => {
    return function(b) {
      if (count <= 3) {
        count++;

        return a + b;
      } else {
        if (count % 2 === 0) {
          count++;

          return 'Bzzz... Error!';
        } else {
          count++;

          return a + b;
        };
      };
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
