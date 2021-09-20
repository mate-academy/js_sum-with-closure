'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCallCounter = 0;

  return (a) => {
    functionCallCounter++;

    return (b) => {
      return (functionCallCounter >= 3 && functionCallCounter % 2 === 0)
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
