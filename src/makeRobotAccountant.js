'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const adder = a => {
    count++;

    return b => count <= 3 || count % 2 !== 0
      ? a + b
      : 'Bzzz... Error!';
  };

  return adder;
}

module.exports = makeRobotAccountant;
