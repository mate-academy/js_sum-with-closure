'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counting = 0;

  return (a) => {
    return (b) => {
      counting++;

      if (counting <= 3 || counting % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
