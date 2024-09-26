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
      if (counter >= 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
