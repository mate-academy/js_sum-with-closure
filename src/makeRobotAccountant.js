'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const sum = (x) => {
    return (y) => {
      if (counter < 3) {
        counter++;

        return x + y;
      } else {
        counter = 0;

        return 'Bzzz... Error!';
      }
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
