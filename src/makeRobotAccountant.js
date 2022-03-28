'use strict';

function makeRobotAccountant() {
  let count = 0;

  const outside = (x) => {
    const inside = (y) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return x + y;
    };

    return inside;
  };

  return outside;
}

module.exports = makeRobotAccountant;
