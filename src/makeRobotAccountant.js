'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return x => {
    return y => {
      countCalls++;

      if (countCalls <= 3 || (countCalls > 3 && countCalls % 2 !== 0)) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
