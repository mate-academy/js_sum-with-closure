'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => {
    return (y) => {
      count++;

      return (count <= 3 || count % 2 !== 0)
        ? x + y
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
