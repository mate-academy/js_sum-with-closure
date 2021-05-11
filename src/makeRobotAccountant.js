'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (x) => {
    count++;

    return (y) => (count < 4 || count % 2 !== 0)
      ? x + y
      : 'Bzzz... Error!';
  };
};

module.exports = makeRobotAccountant;
