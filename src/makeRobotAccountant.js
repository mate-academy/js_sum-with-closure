'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return firstTerm => secondTerm => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return firstTerm + secondTerm;
  };
};

module.exports = makeRobotAccountant;
