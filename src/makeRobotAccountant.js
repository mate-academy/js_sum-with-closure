'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const robotAccounter = (a) => {
    function accounter(b) {
      count++;

      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        }
      }

      const sum = a + b;

      return sum;
    };

    return accounter;
  };

  return robotAccounter;
}

module.exports = makeRobotAccountant;
