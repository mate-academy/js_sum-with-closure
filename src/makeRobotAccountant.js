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

      if (count < 4 || count % 2 !== 0) {
        return first + second;
      } else {
        return 'Bzzz... Error!';
      };
    };
  };
}

module.exports = makeRobotAccountant;
