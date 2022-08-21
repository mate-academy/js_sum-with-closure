'use strict';

function makeRobotAccountant() {
  let count = 0;

  const f = (a) => {
    count++;

    let sum = a;

    const c = (b) => {
      sum += b;

      if (count >= 4 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return sum;
    };

    return c;
  };

  return f;
}

module.exports = makeRobotAccountant;
