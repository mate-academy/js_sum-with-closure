"use strict";

function makeRobotAccountant() {
  let numberOfCalls = 0;

  function getSum(first) {
    numberOfCalls++;

    function result(second) {
      if (numberOfCalls <= 3 || numberOfCalls % 2) {
        return first + second;
      }

      return 'Bzzz... Error!';
    };

    return result;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
