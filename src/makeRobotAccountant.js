'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let summ = 0;

  const robotAccountant = (x) => {
    summ++;

    if (summ > 3 && summ % 2 === 0) {
      return () => 'Bzzz... Error!';
    } else {
      return (y) => x + y;
    }
  };

  return robotAccountant;
}

module.exports = makeRobotAccountant;
