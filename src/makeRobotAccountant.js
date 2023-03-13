'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let numberOfCalls = 0;

  const calculateSum = (a) => {
    numberOfCalls++;

    return (b) => numberOfCalls > 3 && numberOfCalls % 2 === 0
      ? 'Bzzz... Error!'
      : a + b;
  };

  return calculateSum;
}

module.exports = makeRobotAccountant;
