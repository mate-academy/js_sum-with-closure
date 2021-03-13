'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const add = (x) => {
    return function(y) {
      let result;

      if (counter < 3) {
        result = x + y;
      } else {
        result = counter % 2 === 1 ? 'Bzzz... Error!' : x + y;
      }

      counter++;

      return result;
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
