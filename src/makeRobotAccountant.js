'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let counter = 0;

  function sum(a) {
    counter++;

    if ((counter >= 4) && ((counter % 2) === 0)) {
      return (b) => 'Bzzz... Error!';
    }

    return (b) => a + b;
  }

  return sum;
}

module.exports = makeRobotAccountant;
