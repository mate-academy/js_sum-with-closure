'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(number) {
  let countOfCalls = 0;

  return a => b => {
    countOfCalls++;

    return countOfCalls > 3 && countOfCalls % 2 === 0
      ? 'Bzzz... Error!'
      : a + b;
  };
}

module.exports = makeRobotAccountant;
