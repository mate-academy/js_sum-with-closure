'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCallsCount = 0;

  return (num1) => {
    return (num2) => {
      functionCallsCount++;

      return functionCallsCount % 2 === 0 && functionCallsCount > 3
        ? 'Bzzz... Error!'
        : num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
