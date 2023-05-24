'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const innerFunc = function(x) {
    if (count <= 3 || (count > 3 && count % 2 !== 0)) {
      return function(y) {
        count++;

        return x + y;
      };
    } else {
      return function() {
        count++;

        return 'Bzzz... Error!';
      };
    }
  };

  return innerFunc;
}

module.exports = makeRobotAccountant;
