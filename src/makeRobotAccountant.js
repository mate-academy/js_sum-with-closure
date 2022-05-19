'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const innerFunction = (firstPart) => {
    return (secondPart) => {
      count++;

      if ((count > 3) && (count % 2 === 0)) {
        return 'Bzzz... Error!';
      }

      return secondPart + firstPart;
    };
  };

  return innerFunction;
}

module.exports = makeRobotAccountant;
