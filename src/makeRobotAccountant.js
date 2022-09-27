'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 3;

  return x => y =>
    counter-- > 0 || counter % 2 === 0
      ? x + y
      : 'Bzzz... Error!';
}

module.exports = makeRobotAccountant;
