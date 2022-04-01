'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(x) {
    counter++;

    return function(y) {
      if (counter % 2 === 1 || counter === 2) {
        return x + y;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
