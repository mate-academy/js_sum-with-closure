'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (numberFirst) => {
    return (numberSecond) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numberFirst + numberSecond;
    };
  };
}

module.exports = makeRobotAccountant;
