'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return number1 => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (number2) => number1 + number2;
  };
}

module.exports = makeRobotAccountant;
