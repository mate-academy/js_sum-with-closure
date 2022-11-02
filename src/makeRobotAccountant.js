'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calculationAttempts = 0;

  return (a) => {
    return (b) => {
      calculationAttempts++;

      if (calculationAttempts !== 2 && calculationAttempts % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
