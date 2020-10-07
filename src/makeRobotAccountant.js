'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (a) => {
    count++;

    function sum(b) {
      if ((count > 2) && (count % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return a + b;
    }

    return sum;
  };
}

module.exports = makeRobotAccountant;
