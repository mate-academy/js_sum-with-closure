'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const robot = (num1) => {
    count++;

    const secondRobot = (num2) => {
      const oddCalls = !(count % 2);
      const limitCalls = count > 3;
      const errorMessage = 'Bzzz... Error!';
      const summ = num1 + num2;

      return limitCalls && oddCalls ? errorMessage : summ;
    };

    return secondRobot;
  };

  return robot;
}

module.exports = makeRobotAccountant;
