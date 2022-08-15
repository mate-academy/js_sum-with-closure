'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const maxCount = 3;

  return (x) => {
    count++;

    return (y) => {
      if (count > maxCount && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
