'use strict';

function makeRobotAccountant() {
  let counter = 0;

  return (firstFunction) => {
    return (secondFunction) => {
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return firstFunction + secondFunction;
    };
  };
}

module.exports = makeRobotAccountant;
