'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    count++;

    return function(b) {
      return (count % 2 === 0 && count > 3)
        ? `Bzzz... Error!`
        : (a + b);
    };
  };
}

module.exports = makeRobotAccountant;
