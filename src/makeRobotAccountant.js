'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCalls = 0;

  return (numberA) => {
    return (numberB) => {
      numberOfCalls++;

      return (numberOfCalls > 3 && numberOfCalls % 2 === 0)
        ? 'Bzzz... Error!'
        : (numberA + numberB);
    };
  };
}

module.exports = makeRobotAccountant;
