'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sum = (firstValue) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (secondValue) => firstValue + secondValue;
  };

  return sum;
}

module.exports = makeRobotAccountant;
