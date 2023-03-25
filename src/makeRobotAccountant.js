'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCall = 0;

  return (x) => {
    return (y) => {
      countCall++;

      if (countCall > 3 && countCall % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
