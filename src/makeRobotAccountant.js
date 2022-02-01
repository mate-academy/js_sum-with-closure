'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return (value1) => (value2) => {
    countCalls++;

    if (countCalls > 3 && countCalls % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return value1 + value2;
  };
}

module.exports = makeRobotAccountant;
