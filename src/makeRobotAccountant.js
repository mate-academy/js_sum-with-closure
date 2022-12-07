'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCall = 0;

  return (a) => {
    return (b) => {
      countCall++;

      if (countCall < 4 || (countCall >= 4 && countCall % 2 !== 0)) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
