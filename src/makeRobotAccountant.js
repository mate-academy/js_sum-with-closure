'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  const sum = (a) => {
    counter++;

    if (counter < 4 || counter % 2 === 1) {
      return (b) => a + b;
    }

    return () => 'Bzzz... Error!';
  };

  return sum;
}

module.exports = makeRobotAccountant;
