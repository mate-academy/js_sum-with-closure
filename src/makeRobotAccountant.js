'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (numberFirst) => {
    return (secondNumber) => {
      count++;

      if (count <= 3 || count % 2 !== 0) {
        return numberFirst + secondNumber;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
