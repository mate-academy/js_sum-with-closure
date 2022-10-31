'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let calls = 0;

  return (x) => {
    calls++;

    return (y) => !(calls > 3 && calls % 2 === 0)
      ? x + y
      : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
