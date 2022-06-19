'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = -1;

  function sum(x) {
    count++;

    return (y) => {
      if (count < 3 || count % 2 === 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      };
    };
  };

  return sum;
}

module.exports = makeRobotAccountant;
