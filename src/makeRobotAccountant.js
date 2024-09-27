'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let index = 0;

  return a => {
    index++;

    return b => {
      if (index > 3 && index % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
