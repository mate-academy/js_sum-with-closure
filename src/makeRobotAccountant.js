'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (y) => {
    return x => {
      calls++;

      if (calls > 3 && calls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return y + x;
    };
  };
}

module.exports = makeRobotAccountant;
