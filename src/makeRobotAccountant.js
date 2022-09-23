'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstTerm) => {
    return (secondTerm) => {
      counter++;

      const sum = firstTerm + secondTerm;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };
  };
}

module.exports = makeRobotAccountant;
