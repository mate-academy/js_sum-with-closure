'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const add = (a) => {
    return function(b) {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
