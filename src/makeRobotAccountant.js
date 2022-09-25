'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (outerArgument) => {
    return (innerArgument) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return outerArgument + innerArgument;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
