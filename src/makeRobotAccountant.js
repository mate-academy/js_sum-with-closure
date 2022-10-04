'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let call = 0;

  return (x) => {
    return (y) => {
      call++;

      if (call > 3 && call % 2 === 0) {
        return 'Bzzz... Error!';
      };

      if (call > 3 && call % 2 === 1) {
        return x + y;
      }

      return x + y;
    };
  };
};

module.exports = makeRobotAccountant;
