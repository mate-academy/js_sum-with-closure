/* eslint-disable no-unmodified-loop-condition */
'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(a) {
    counter += 1;

    return function(b) {
      if (counter % 2 === 0 && counter > 3) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
