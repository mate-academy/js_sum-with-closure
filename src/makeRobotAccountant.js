'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sum(x) {
    return (y) => {
      const requestCount = count;

      count++;

      if (requestCount < 3) {
        return x + y;
      } else if (requestCount % 2 === 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
