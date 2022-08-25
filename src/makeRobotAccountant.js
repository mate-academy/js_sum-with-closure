'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCall = 0;

  return (number1) => {
    countCall++;

    if (countCall > 3 && countCall % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (number2) => number1 + number2;
  };
}

module.exports = makeRobotAccountant;
