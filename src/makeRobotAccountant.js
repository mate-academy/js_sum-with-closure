'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let numcall = 0;

  return (a) => {
    return (b) => {
      numcall += 1;

      if (numcall < 4) {
        return a + b;
      }

      if (numcall % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
