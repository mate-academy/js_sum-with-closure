'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const summ = (a) => {
    count++;

    return function(b) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };

  return summ;
}

module.exports = makeRobotAccountant;
