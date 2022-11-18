'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalculate = 0;

  return (a) => {
    return (b) => {
      countCalculate++;

      if (countCalculate < 4
        || (countCalculate >= 4 && countCalculate % 2 !== 0)) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
