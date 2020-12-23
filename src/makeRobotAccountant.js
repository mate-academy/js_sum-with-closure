'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (n) => {
    count++;

    return (num) => {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return n + num;
    };
  };
}

module.exports = makeRobotAccountant;
