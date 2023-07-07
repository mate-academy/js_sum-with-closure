'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 3;

  return (a) => {
    return counter > 0
      ? (b) => counter-- && b + a
      : () => counter++ || 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
