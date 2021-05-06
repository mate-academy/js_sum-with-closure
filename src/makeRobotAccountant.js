'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCall = 0;

  return (numberFirst) => {
    return (numberSecond) => {
      countCall++;

      if (countCall > 3 && countCall % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numberFirst + numberSecond;
    };
  };
}

module.exports = makeRobotAccountant;
