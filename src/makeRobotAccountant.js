'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function firstCall(x) {
    function secondCall(y) {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return secondCall;
  }

  return firstCall;
}

module.exports = makeRobotAccountant;
