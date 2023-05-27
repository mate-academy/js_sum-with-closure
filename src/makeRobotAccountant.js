'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(firstVar) {
    return (secondVar) => {
      count++;

      if (count <= 3 || count % 2 !== 0) {
        return firstVar + secondVar;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
