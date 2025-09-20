function makeRobotAccountant() {
  let callCount = 0; // keep track of calls

  return function(a) {
    return function(b) {
      callCount++; // increment on each use
      if (callCount > 3 && callCount % 2 === 0) {
        return "Bzzz... Error!";
      } else {
        return a + b;
      }
    }
  }
}

module.exports = makeRobotAccountant;
