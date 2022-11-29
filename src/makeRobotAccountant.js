'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  return (a) => {
    return (b) => {
      numberOfCalls++;

      return (numberOfCalls > 3 && numberOfCalls % 2 === 0)
        ? 'Bzzz... Error!' : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
