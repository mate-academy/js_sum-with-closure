'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCall = 0;

  return function(x) {
    return function(y) {
      functionCall++;

      if (functionCall > 3 && functionCall % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
