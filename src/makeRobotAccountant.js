'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;
  const getSum = (number) => {
    counter++;

    const newGetsum = (newNumber) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number + newNumber;
    };

    return newGetsum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
