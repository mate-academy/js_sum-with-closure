'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(paramA) {
    count++;

    return function(paramB) {
      if (count % 2 === 0 && count > 2) {
        return 'Bzzz... Error!';
      }

      return paramA + paramB;
    };
  };
}

module.exports = makeRobotAccountant;
