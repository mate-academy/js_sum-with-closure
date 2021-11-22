'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let checker = -1;

  return (a) => {
    return (b) => {
      checker++;

      return checker % 2 === 0 || checker === 1
        ? a + b
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
