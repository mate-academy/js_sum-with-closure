'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const errorMessage = 'Bzzz... Error!';

  return (num1) => {
    counter++;

    const isMoreThen3 = counter > 3;
    const isOdd = counter % 2 === 0;

    const messageOrNum = isMoreThen3 && isOdd
      ? message => errorMessage
      : num2 => num1 + num2;

    return messageOrNum;
  };
}

module.exports = makeRobotAccountant;
