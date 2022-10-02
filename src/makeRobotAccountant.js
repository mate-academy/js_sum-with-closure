'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const result = (num1) => {
    const adding = (num2) => {
      const sum = num1 + num2;

      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };

    return adding;
  };

  return result;
}

module.exports = makeRobotAccountant;
