'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sumXY(x) {
    return (y) => {
      const no = count;

      count++;

      if (no < 3) {
        return x + y;
      } else if (no % 2 === 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return sumXY;
}

module.exports = makeRobotAccountant;
