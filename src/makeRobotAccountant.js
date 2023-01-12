'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(x) {
    return function(y) {
      const errorMessage = 'Bzzz... Error!';
      const sum = x + y;
      /*
      * I added this constant for future,
      * maybe later I need to find another math operation
      */

      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return errorMessage;
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
