'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;
  const makeSum = (num1) => {
    countCalls++;

    return (num2) => {
      return (countCalls > 3 && countCalls % 2 === 0)
        ? 'Bzzz... Error!'
        : (num1 + num2);
    };
  };

  return makeSum;
}

module.exports = makeRobotAccountant;
