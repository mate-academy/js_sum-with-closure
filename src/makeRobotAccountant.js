'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let timesCalled = 0;

  return firstAddendum =>
    secondAddendum => {
      timesCalled++;

      return timesCalled <= 3 || timesCalled % 2
        ? firstAddendum + secondAddendum
        : 'Bzzz... Error!';
    };
}

module.exports = makeRobotAccountant;
