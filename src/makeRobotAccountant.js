'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (numberPrev) => {
    return (numberCur) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numberPrev + numberCur;
    };
  };
}

module.exports = makeRobotAccountant;
