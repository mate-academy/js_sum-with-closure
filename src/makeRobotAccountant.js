'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const accountant = (a) => (b) => {
    if (countVerification(count++)) {
      return a + b;
    }

    return 'Bzzz... Error!';
  };

  function countVerification() {
    return count < 3 || count % 2;
  }

  return accountant;
}

module.exports = makeRobotAccountant;
