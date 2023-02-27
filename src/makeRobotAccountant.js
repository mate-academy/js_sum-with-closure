'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let count = 1;

  function add(x) {
    return (y) => {
      count++;

      if (count > 3 && count % 2) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  }

  return add;
}

module.exports = makeRobotAccountant;
