'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  function wrapper(x) {
    function calculate(y) {
      count();

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    }

    return calculate;
  }

  function count() {
    return counter++;
  }

  return wrapper;
}

module.exports = makeRobotAccountant;
