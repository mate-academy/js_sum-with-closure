'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const accountanting = [];

  const getSum = (x) => {
    return function(y) {
      while (true) {
        if (accountanting.length <= 2 || accountanting.length % 2 === 0) {
          accountanting.push(x + y);
          break;
        } else {
          accountanting.push(`Bzzz... Error!`);
          break;
        }
      }

      return accountanting[accountanting.length - 1];
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
