'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  function sum(numFirst) {
    counter++;

    if (counter % 2 === 0 && counter > 3) {
      return function() {
        return 'Bzzz... Error!';
      };
    } else {
      return function(numSecond) {
        return (numFirst + numSecond);
      };
    }
  };

  return sum;
}

module.exports = makeRobotAccountant;
