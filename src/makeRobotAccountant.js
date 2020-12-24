'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let count = 0;

  return function(firstNum) {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => 'Bzzz... Error!';
    } else {
      return (secondNum) => firstNum + secondNum;
    }
  };
}

module.exports = makeRobotAccountant;
