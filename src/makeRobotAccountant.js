'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return a => {
    counter++;

    return b =>
      (counter < 3 || counter % 2)
        ? a + b
        : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
