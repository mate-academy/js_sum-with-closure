'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  const getFirstArgument = (firstArgument) => {
    const getSecondArgument = (secondArgument) => {
      countCalls++;

      return countCalls % 2 === 0 && countCalls > 3
        ? 'Bzzz... Error!'
        : firstArgument + secondArgument;
    };

    return getSecondArgument;
  };

  return getFirstArgument;
}

module.exports = makeRobotAccountant;
