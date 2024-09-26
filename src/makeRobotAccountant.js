'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getFirstArgument = x => {
    counter++;

    const getSecondArgument = y => {
      if (counter > 3 && (counter % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return getSecondArgument;
  };

  return getFirstArgument;
}

module.exports = makeRobotAccountant;
