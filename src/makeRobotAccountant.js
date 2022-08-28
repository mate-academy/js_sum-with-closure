'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sumCounter = (x) => {
    count++;

    return function(y) {
      if (count <= 3 || count % 2 !== 0) {
        return x + y;
      };

      return 'Bzzz... Error!';
    };
  };

  return sumCounter;
}

module.exports = makeRobotAccountant;
