'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  const robotAccountant = (x) => {
    const addY = (y) => {
      countOfCalls++;

      if (countOfCalls > 3 && countOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return y + x;
    };

    return addY;
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
