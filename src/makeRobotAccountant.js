'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(a) {
    return function(b) {
      count++;

      return count < 3 || count % 2 !== 0
        ? (a + b)
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;

  /*
      if (count < 3) {
        return (a + b);
      }

      if (count % 2 !== 0) {
        return (a + b);
      };

      if (count % 2 === 0) {
        return 'Bzzz... Error!';
      };*/
