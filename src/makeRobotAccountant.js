'use strict';

function makeRobotAccountant() {
  let count = 0;
  let errEveryEven = false;

  return function(num1) {
    return function(num2) {
      if (count >= 3) {
        errEveryEven = !errEveryEven;
      } else {
        count++;
      }

      if (errEveryEven) {
        return 'Bzzz... Error!';
      }

      return num1 + num2;
    };
  };
}

module.exports = makeRobotAccountant;
