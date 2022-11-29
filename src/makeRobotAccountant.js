'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(n1) {
    return function(n2) {
      count++;

      if (count <= 3 || (count % 2 !== 0)) {
        return n1 + n2;
      }

      return 'Bzzz... Error!';
    };
  };
};

module.exports = makeRobotAccountant;
