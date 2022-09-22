'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 3;

  const calc = (a) => (b) => {
    if (counter < 1) {
      counter++;

      return 'Bzzz... Error!';
    }
    counter--;

    return a + b;
  };

  return calc;
}

module.exports = makeRobotAccountant;
