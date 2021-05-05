'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const firstValue = a => {
    count++;

    const secondValue = b => {
      if (count > 3 && (count % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };

    return secondValue;
  };

  return firstValue;
}

module.exports = makeRobotAccountant;
