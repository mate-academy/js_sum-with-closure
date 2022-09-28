'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(x) {
  let counter = 0;

  return (numberOne) => {
    counter++;

    return (numberSecond) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numberOne + numberSecond;
    };
  };
}

module.exports = makeRobotAccountant;
