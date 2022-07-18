'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numberOfCals = 0;

  return (firstValue) => {
    return (secondValue) => {
      numberOfCals++;

      if ((numberOfCals > 3) && (numberOfCals % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
