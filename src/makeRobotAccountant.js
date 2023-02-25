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

    if (session > 3 && session % 2 === 0) {
      return (secondNumber) => {
        return 'Bzzz... Error!';
      };
    }

    return (secondNumber) => {
      result += secondNumber;

      return result;
    };
  };

  return calcSum;
};

module.exports = makeRobotAccountant;
