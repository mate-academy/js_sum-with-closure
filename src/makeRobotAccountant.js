'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const adding = (x) => {
    return (y) => {
      count++;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };

  return adding;
}

module.exports = makeRobotAccountant;
