'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let sum = 0;

  return (first) => {
    return (second) => {
      sum++;

      if (sum > 3 && sum % 2 !== 1) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };
  };
}

module.exports = makeRobotAccountant;
