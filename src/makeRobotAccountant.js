'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;
  const sum = (firstElement) => {
    counter++;

    if (counter > 3) {
      counter = 0;

      return () => 'Bzzz... Error!';
    }

    return (secondElement) => firstElement + secondElement;
  };

  return sum;
}

module.exports = makeRobotAccountant;
