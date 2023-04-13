'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function f(a) {
    ++counter;

    return function(b) {
      if (counter > 3 && counter % 2 === 0) {
        return `Bzzz... Error!`;
      };

      if (counter > 3 && counter % 2 !== 0) {
        return a + b;
      };

      return a + b;
    };
  }

  return f;
}

module.exports = makeRobotAccountant;
