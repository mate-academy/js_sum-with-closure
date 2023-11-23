'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  const robotAccountant = function(a) {
    return function(b) {
      if (counter % 2 === 0 || counter < 3) {
        counter++;

        return a + b;
      }

      counter++;

      return 'Bzzz... Error!';
    };
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
