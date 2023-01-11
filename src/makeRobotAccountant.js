'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return (first) => {
    countCalls++;

    return (second) => {
      const sum = first + second;

      return countCalls > 3 && countCalls % 2 === 0
        ? 'Bzzz... Error!'
        : sum;
    };
  };
}

module.exports = makeRobotAccountant;
