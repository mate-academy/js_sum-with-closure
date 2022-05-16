'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;
  const firstThreeSteps = 3;

  return (x) => {
    return (y) => {
      count++;

      if (count % 2 === 0 && count > firstThreeSteps) {
        return 'Bzzz... Error!';
      }

      return x + y;
    }
  }
}

module.exports = makeRobotAccountant;
