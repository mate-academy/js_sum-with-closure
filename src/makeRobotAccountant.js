'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const firstAdd = (firstValue) => {
    let result = firstValue;

    const secondAdd = (secondValue) => {
      result += secondValue;
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return result;
    };

    return secondAdd;
  };

  return firstAdd;
}

module.exports = makeRobotAccountant;
