'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (x) => {
    return (y) => {
      counter++;

      return (counter < 4 || counter % 2)
        ? (x + y)
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
