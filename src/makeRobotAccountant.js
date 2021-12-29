'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCallCounter = 3;

  return function(num1) {
    --functionCallCounter;

    return function(num2) {
      if (functionCallCounter < 0) {
        if (functionCallCounter % 2) {
          return 'Bzzz... Error!';
        }
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
