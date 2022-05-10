'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSome = (firstArg) => {
    counter++;

    return (secondArg) => {
      if (counter >= 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstArg + secondArg;
    };
  };

  return getSome;
}

module.exports = makeRobotAccountant;
