'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let attempts = 3;
  let functionCallCounter = 0;

  return function(num1) {
    --attempts;

    return function(num2) {
      if (attempts < 0) {
        ++functionCallCounter;

        if (functionCallCounter % 2) {
          return 'Bzzz... Error!';
        }
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
