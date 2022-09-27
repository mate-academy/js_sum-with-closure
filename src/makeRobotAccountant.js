'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return x => y =>
    counter++ < 3 || counter % 2
      ? x + y
      : 'Bzzz... Error!';
}

module.exports = makeRobotAccountant;
