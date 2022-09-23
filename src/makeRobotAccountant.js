'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (firstValue) => {
    return (secondValue) => {
      calls++;

      if (calls <= 3 || calls % 2 === 1) {
        return firstValue + secondValue;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
