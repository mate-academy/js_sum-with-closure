'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let caunter = 0;

  return function(x) {
    return function(y) {
      if (caunter < 3) {
        caunter++;

        return x + y;
      } else {
        caunter--;

        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
