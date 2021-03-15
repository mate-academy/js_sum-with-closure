'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const add = (x) => {
    return function(y) {
      const result = (counter < 3 || counter % 2 === 0)
        ? x + y
        : 'Bzzz... Error!';

      counter++;

      return result;
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
