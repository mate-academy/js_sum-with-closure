'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant(a) {
  let count = 0;

  return (b) => {
    return (c) => {
      count++;

      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      } else {
        return b + c;
      }
    };
  };
}

module.exports = makeRobotAccountant;
