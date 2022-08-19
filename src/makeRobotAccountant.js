'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const accounter = function(x) {
    return function(y) {
      counter++;

      if ((counter > 3) && (counter % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return accounter;
}

module.exports = makeRobotAccountant;
