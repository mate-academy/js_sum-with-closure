'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  const limit = 3;
  let count = 0;

  return (firstNum) => (secondNum) => {
    count++;

    return (count <= limit || count % 2 !== 0)
      ? firstNum + secondNum : 'Bzzz... Error!';
  };
}

module.exports = makeRobotAccountant;
