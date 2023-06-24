'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (number) => {
    counter++;

    if (counter > 3 && counter % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (secondNumber) => number + secondNumber;
  };
}

module.exports = makeRobotAccountant;
