'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  function sum(a) {
    count++;

    function result(b) {
      return a + b;
    };

    if (count > 3) {
      switch (count % 2) {
        case 0:
          return function() {
            return 'Bzzz... Error!';
          };

        case 1:
          return result;
      };
    }

    return result;
  }

  return sum;
}

module.exports = makeRobotAccountant;
