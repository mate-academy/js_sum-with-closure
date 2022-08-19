'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getsum(argX) {
    count++;

    return function(argY) {
      if (count % 2 === 0 && count !== 2) {
        return 'Bzzz... Error!';
      }

      return argX + argY;
    };
  };
}

module.exports = makeRobotAccountant;
