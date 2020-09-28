'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let usageCaunt = 0;

  const addNumber = function(numberA) {
    const savedNumber = numberA;

    usageCaunt++;

    return (numberB) => {
      if (usageCaunt > 3 && usageCaunt % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return savedNumber + numberB;
    };
  };

  return addNumber;
}

module.exports = makeRobotAccountant;
