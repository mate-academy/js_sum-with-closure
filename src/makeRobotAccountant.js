'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstValue) => {
    return (secondValue) => {
      if (counter === 3) {
        counter--;

        return 'Bzzz... Error!';
      }
      counter++;

      return firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
