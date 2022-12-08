'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return (numFirst) => {
    countCalls++;

    return (numSecond) => {
      if (countCalls <= 3 || countCalls % 2 === 1) {
        return numFirst + numSecond;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
