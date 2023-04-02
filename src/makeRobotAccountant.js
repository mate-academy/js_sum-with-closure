'use strict';

function makeRobotAccountant() {
  let count = -1;

  return function(x) {
    count++;

    return (y) => {
      if (count >= 3) {
        if (count % 2 !== 0) {
          return 'Bzzz... Error!';
        }
      }

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
