'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return function(first) {
    return function(second) {
      counter++;

      return (counter <= 3 || counter % 2 !== 0)
        ? first + second
        : 'Bzzz... Error!';
    };
  };
};

module.exports = makeRobotAccountant;
