'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  const sum = (a) => {
    return function(b) {
      i++;

      if (i > 3 && i % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
