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

      if (countCall > 3 && countCall % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
