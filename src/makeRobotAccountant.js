'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstValue) => {
    return (secondValue) => {
      counter++;

      if (counter <= 3 || (counter > 3 && counter % 2 !== 0)) {
        return firstValue + secondValue;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
