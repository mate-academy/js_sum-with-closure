'use strict';

function makeRobotAccountant() {
  let count = 0;
  const getSum = (a) => {
    return (b) => {
      count++;

      if (count <= 3 || count % 2 === 1) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
