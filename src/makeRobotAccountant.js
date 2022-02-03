'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstSum) => {
    return (secondSum) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstSum + secondSum;
    };
  };
}

module.exports = makeRobotAccountant;
