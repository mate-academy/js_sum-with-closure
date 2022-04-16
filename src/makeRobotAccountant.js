'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function first(x) {
    function second(y) {
      if (counter === 3) {
        counter = 2;

        return 'Bzzz... Error!';
      }
      counter++;

      return x + y;
    }

    return second;
  }

  return first;
}

module.exports = makeRobotAccountant;
