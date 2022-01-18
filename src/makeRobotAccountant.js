'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const errorMessage = 'Bzzz... Error!';

  const add = (firstNumb) => {
    count++;

    return (secondNumb) => {
      if (count > 3 && count % 2 === 0) {
        return errorMessage;
      }

      return firstNumb + secondNumb;
    };
  };

  return add;
}

module.exports = makeRobotAccountant;
