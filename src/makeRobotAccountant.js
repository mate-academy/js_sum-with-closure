'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  return (firstArgument) => {
    return (secondArgument) => {
      counter++;

      return (counter > 3 && counter % 2 === 0)
        ? 'Bzzz... Error!' : firstArgument + secondArgument;
    };
  };
}

module.exports = makeRobotAccountant;
