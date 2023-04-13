'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;
  const errorCheck = (first) => {
    counter++;

    const adding = (second) => {
      return counter <= 3 || counter % 2 !== 0
        ? first + second
        : 'Bzzz... Error!';
    };

    return adding;
  };

  return errorCheck;
}

module.exports = makeRobotAccountant;
