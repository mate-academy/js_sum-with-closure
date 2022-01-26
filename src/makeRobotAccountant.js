'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (firstVar) => {
    count += 1;

    return (secondVar) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstVar + secondVar;
    };
  };
}

module.exports = makeRobotAccountant;
