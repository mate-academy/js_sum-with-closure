'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfLoads = 0;

  return (x) => {
    countOfLoads++;

    return (y) => {
      return countOfLoads >= 3 && countOfLoads % 2 === 0
        ? 'Bzzz... Error!'
        : x + y;
    };
  };
}

module.exports = makeRobotAccountant;
