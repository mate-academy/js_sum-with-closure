'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => {
    return (y) => {
      if (count++ > 2) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return x + y;
        }
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
