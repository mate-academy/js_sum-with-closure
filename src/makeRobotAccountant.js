'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstArgumen) => {
    return (nextArgument) => {
      counter++;

      return (counter < 4 || counter % 2 !== 0)
        ? firstArgumen + nextArgument
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
