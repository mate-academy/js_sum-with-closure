'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationCall = 0;

  return (firstValue) => {
    operationCall++;

    return (secondValue) => {
      switch (true) {
        case (operationCall <= 3):
          return firstValue + secondValue;

        case (operationCall % 2 !== 0):
          return firstValue + secondValue;

        default:
          return 'Bzzz... Error!';
      }
    };
  };
}

module.exports = makeRobotAccountant;
