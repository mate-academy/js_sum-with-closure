'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  if (count < 3) {
    return function (n1) {
      return function (n2) {
        count++;

        if (count >= 4 && count % 2 === 0) {
          return 'Bzzz... Error!';
        }

        return n1 + n2;
      };
    };
  }
}

module.exports = makeRobotAccountant;
