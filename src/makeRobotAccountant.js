'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;
  const result = (x) => {
    const addNo = (y) => {
      countCalls++;

      if (countCalls % 2 === 0 && countCalls > 3) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      };
    };

    return addNo;
  };

  return result;
}

module.exports = makeRobotAccountant;
