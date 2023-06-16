'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;

  return function(firstAddend) {
    return function(secondAddend) {
      call++;

      if ((call > 3) && (call % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return firstAddend + secondAddend;
    };
  };
}

module.exports = makeRobotAccountant;
