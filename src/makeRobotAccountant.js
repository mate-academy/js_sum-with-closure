'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callsCount = 0;

  const counting = (firstNum) => {
    callsCount++;

    return (secondNum) => {
      if (callsCount <= 3 || callsCount % 2 === 1) {
        return firstNum + secondNum;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return counting;
}

module.exports = makeRobotAccountant;
