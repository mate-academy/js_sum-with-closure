'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (initialValue) => {
    return (adding) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return initialValue + adding;
    };
  };
}

module.exports = makeRobotAccountant;
