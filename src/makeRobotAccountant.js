'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let session = 0;

  const calcSum = function(number) {
    let result = number;

    session++;

    return (secondNumber) => {
      if (session > 3 && session % 2 === 0) {
        return 'Bzzz... Error!';
      }

      result += secondNumber;

      return result;
    };
  };

  return calcSum;
};

module.exports = makeRobotAccountant;
