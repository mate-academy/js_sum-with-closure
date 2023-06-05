'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let additionsCounter = 0;

  return function(number1) {
    return function(number2) {
      additionsCounter++;

      return additionsCounter > 3 && additionsCounter % 2 === 0
        ? 'Bzzz... Error!'
        : number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
