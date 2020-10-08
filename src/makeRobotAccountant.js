'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const firstTerm = (firstItem) => {
    let sum = firstItem;

    const secondTerm = (secondItem) => {
      sum += secondItem;
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };

    return secondTerm;
  };

  return firstTerm;
}

module.exports = makeRobotAccountant;
