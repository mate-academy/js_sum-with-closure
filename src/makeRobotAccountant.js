'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const LIMIT = 3;
  let counter = 0;

  return function(a) {
    return function(b) {
      counter++;

      if (counter > LIMIT && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
