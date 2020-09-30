'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let caunter = 0;

  const addNumber = function(numberA) {
    const savedNumber = numberA;

    caunter++;

    return (numberB) => {
      if (caunter > 3 && caunter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return savedNumber + numberB;
    };
  };

  return addNumber;
}

module.exports = makeRobotAccountant;
