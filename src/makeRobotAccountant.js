'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let accountant = 0;

  return (x) => {
    accountant++;

    return (y) => {
      if (accountant <= 3 || accountant % 2 === 1) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
