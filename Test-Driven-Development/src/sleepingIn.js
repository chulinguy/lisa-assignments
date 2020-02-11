function sleepingIn(weekday, vacation) {
    switch(true) {
        case (weekday === false && vacation === true):
          return true;
          break;
        case (weekday === true && vacation === true):
          return true;
          break;
        case (weekday === false && vacation === false):
          return true;
          break;
        default:
          return false;
          break;
      }
}

module.exports = sleepingIn;