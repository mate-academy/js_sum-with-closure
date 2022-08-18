'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {

  let counter = 0;

  return (number1) => {
    counter++;

    return (number2) => counter > 3 && counter % 2 === 0
      ? `Bzzz... Error!`
      : number1 + number2;
  };
}

module.exports = makeRobotAccountant;
