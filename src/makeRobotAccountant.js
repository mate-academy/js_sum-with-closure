'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;

  return (firstVallue) => {
    return (secondVallue) => {
      callCount += 1;

      if (callCount <= 3 || callCount % 2 === 1) {
        return firstVallue + secondVallue;
      }

      return 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
