'use strict';

function makeRobotAccountant() {
  let callCounter = 0;

  return (firstValue) => {
    callCounter++;

    return (secondValue) => {
      if (callCounter > 3 && callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return firstValue + secondValue;
    };
  };
}

module.exports = makeRobotAccountant;
