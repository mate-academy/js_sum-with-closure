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

      if (counter % 2 === 0 && counter > 3) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
