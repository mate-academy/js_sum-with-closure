'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counterOfCalls = 0;

  return (a) => {
    counterOfCalls++;

    return (b) => {
      if (counterOfCalls <= 3 || counterOfCalls % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
