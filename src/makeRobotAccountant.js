'use strict';

/**
 *
 * @return {function}
 */
// - Lets ...bzzz...
// |-- calculate ...bzzz...
// |-- some NUMbzzzzzzzzzzzzzzzzz...
function makeRobotAccountant() {
  let count = 0;

  function sum(x) {
    count++;

    return (y) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  }

  return sum;
}

module.exports = makeRobotAccountant;
