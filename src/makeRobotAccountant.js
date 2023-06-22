'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsLeft = 3;
  let isEvenCall = true;

  return (firstNum) => {
    const sumFunc = (secondNum) => firstNum + secondNum;

    if (callsLeft) {
      callsLeft -= 1;

      return (secondNum) => sumFunc(secondNum);
    }

    if (isEvenCall) {
      isEvenCall = false;

      return () => 'Bzzz... Error!';
    }
    isEvenCall = true;

    return (secondNum) => sumFunc(secondNum);
  };
}

module.exports = makeRobotAccountant;
