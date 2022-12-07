'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (b) => (a) => {
    counter++;

    const checkCounting = (counter < 3)
      ? a + b
      : (counter % 2 !== 0)
        ? a + b
        : 'Bzzz... Error!';

    return checkCounting;
  }
};

module.exports = makeRobotAccountant;
