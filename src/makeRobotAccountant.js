'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let functionCallCounter = 0;
  const getSum = (first) => {
    return function getFirstArgument(second) {
      functionCallCounter++;

      if ((functionCallCounter % 2 === 0)
      && functionCallCounter > 3) {
        return 'Bzzz... Error!';
      }

      return first + second;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
