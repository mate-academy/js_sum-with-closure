'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstArgument) => {
    return (nextArgument) => {
      counter++;

      return (counter < 4 || counter % 2 !== 0)
        ? firstArgument + nextArgument
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
