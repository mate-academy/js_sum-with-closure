'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const adder = (a) => {
    count++;

    const secondAdder = (b) => {
      return count <= 3
        ? a + b
        : count % 2 === 0
          ? 'Bzzz... Error!'
          : a + b;
    };

    return secondAdder;
  };

  return adder;
}

module.exports = makeRobotAccountant;
