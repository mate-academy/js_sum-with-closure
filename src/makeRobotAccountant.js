'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (n) => {
    return (m) => {
      counter += 1;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return n + m;
    };
  };
}

module.exports = makeRobotAccountant;
