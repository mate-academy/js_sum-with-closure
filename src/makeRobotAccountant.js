'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return firstTerm => {
    return secondTerm => {
      counter++;

      return counter < 3 || counter % 2
        ? firstTerm + secondTerm
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
