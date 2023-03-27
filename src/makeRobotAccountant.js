'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let accountingCount = 0;

  return function(addition1) {
    accountingCount++;

    return function(addition2) {
      return accountingCount > 3
        && accountingCount % 2 === 0
        ? 'Bzzz... Error!'
        : addition1 + addition2;
    };
  };
}

module.exports = makeRobotAccountant;
