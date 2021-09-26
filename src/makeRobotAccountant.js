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

    if (counter > 3) {
      return (counter % 2)
        ? sum
        : glitch;
    } else {
      return sum;
    }
  };

  return adder;
}

module.exports = makeRobotAccountant;
