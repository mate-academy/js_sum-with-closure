'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstNumb) => {
    return (secondNumb) => {
      counter++;

      if (counter > 3 && (counter % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return firstNumb + secondNumb;
    };
  };
}

module.exports = makeRobotAccountant;
