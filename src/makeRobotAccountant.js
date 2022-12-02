'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (firstNumb) => {
    counter++;

    return (secondNumb) => {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstNumb + secondNumb;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
