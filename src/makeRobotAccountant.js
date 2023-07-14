'use strict';

function makeRobotAccountant() {
  let callsCount = 0;

  return function(firstOperand) {
    callsCount++;

    if (callsCount <= 3 || callsCount % 2 === 1) {
      return (secondOperand) => firstOperand + secondOperand;
    };

    return () => 'Bzzz... Error!';
  };
};

module.exports = makeRobotAccountant;
