'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const sum = (a) => {
    counter++;

    return (b) => (counter < 4 || counter % 2 === 1
      ? a + b
      : 'Bzzz... Error!');
  };

  return sum;
}

module.exports = makeRobotAccountant;
