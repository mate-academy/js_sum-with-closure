'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const func = (firstNumber) => {
    counter++;

    return (secondnumber) => {
      if (counter < 3 || counter % 2 !== 0) {
        return firstNumber + secondnumber;
      }

      return 'Bzzz... Error!';
    };
  };

  return func;
}
module.exports = makeRobotAccountant;
