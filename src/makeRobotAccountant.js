'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const adder = (firstNumber) => {
    counter++;

    const sum = (secondNumber) => {
      return firstNumber + secondNumber;
    };

    const glitch = () => {
      return 'Bzzz... Error!';
    };

    return (counter > 3 && !(counter % 2))
      ? glitch
      : sum;
  };

  return adder;
}

module.exports = makeRobotAccountant;
