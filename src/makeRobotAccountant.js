'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (first) => {
    return (second) => {
      count++;

      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        } else {
          return first + second;
        }
      }

      return first + second;
    };
  };
}

module.exports = makeRobotAccountant;
