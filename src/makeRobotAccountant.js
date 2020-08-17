'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let errorThrough = 0;

  return function(a) {
    return function(b) {
      if (errorThrough === 3) {
        errorThrough--;

        return 'Bzzz... Error!';
      }
      errorThrough++;

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
