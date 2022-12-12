'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let check = 0;

  return (number1) => {
    return (number2) => {
      check++;

      return check > 3 && check % 2 === 0
        ? 'Bzzz... Error!'
        : number1 + number2;
    };
  };
}

module.exports = makeRobotAccountant;
