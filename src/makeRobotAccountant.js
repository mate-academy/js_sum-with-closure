'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => {
    return function(y) {
      if (count > 2 && count % 2 !== 0) {
        count++;

        return 'Bzzz... Error!';
      } else {
        count++;

        return x + y;
      }
    };
  };
}

module.exports = makeRobotAccountant;
