'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here

  let count = 0;

  const sumOfAll = (first) => {
    count++;

    const evenCalls = (second) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };

    return evenCalls;
  };

  return sumOfAll;
}

module.exports = makeRobotAccountant;
