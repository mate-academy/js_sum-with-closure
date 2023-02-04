'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const sum = (x) => {
    counter++;

    if (counter < 4 || counter % 2 !== 0) {
      return (y) => x + y;
    }

    return () => 'Bzzz... Error!';
  };

  return sum;
}

module.exports = makeRobotAccountant;
