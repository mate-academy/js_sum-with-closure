'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return firstValue => secondValue => {
    count++;

    if (count % 2 === 0 && count > 3) {
      return 'Bzzz... Error!';
    }

    return firstValue + secondValue;
  };
}

module.exports = makeRobotAccountant;
