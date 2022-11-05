'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const sum = (x) => {
    return (y) => {
      counter++;

      if (counter >= 4 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
