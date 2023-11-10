'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let i = 0;

  return (first) => {
    return (second) => {
      i++;

      return (i > 3 && i % 2 === 0)
        ? 'Bzzz... Error!' : first + second;
    };
  };
}

module.exports = makeRobotAccountant;
