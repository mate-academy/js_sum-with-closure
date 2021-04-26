'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return (el1) => {
    count++;

    return function(el2) {
      return count > 4 && count & 1 ? 'Bzzz... Error!' : el1 + el2;
    };
  };
}

module.exports = makeRobotAccountant;
