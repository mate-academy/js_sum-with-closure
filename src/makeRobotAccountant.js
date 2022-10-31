'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getFirstValue = a => {
    count++;

    const getSecondValue = b => {
      if (count > 3 && (count % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };

    return getSecondValue;
  };

  return getFirstValue;
}

module.exports = makeRobotAccountant;
