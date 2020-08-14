'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  // eslint-disable-next-line no-unused-vars
  let count = 0;

  return function(a) {
    count++;

    return b => {
      if (count < 3 || count % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
