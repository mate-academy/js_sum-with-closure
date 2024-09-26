'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countOfCalls = 0;

  return (a) => {
    countOfCalls++;

    return (b) => {
      if (countOfCalls > 3 && countOfCalls % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
