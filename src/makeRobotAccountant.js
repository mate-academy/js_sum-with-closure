'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let amount = 0;

  return (a) => {
    return (b) => {
      amount++;

      if (amount % 2 === 0 && amount > 3) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
