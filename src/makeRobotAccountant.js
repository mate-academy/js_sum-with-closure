'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => {
    if (count < 3 || count % 2 === 0) {
      count++;

      return function(y) {
        return x + y;
      };
    }

    if (count >= 3 && count % 2 !== 0) {
      count++;

      return () => 'Bzzz... Error!';
    }
  };
}

module.exports = makeRobotAccountant;
