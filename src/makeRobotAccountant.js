'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  const takeValue1 = (x) => {
    const takeValue2 = (y) => {
      i++;

      if (i < 4 || i % 2 !== 0) {
        return x + y;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return takeValue2;
  };

  return takeValue1;
}

module.exports = makeRobotAccountant;
