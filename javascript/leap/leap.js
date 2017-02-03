//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function() {};

Year.prototype.isLeap = function(input) {
  if(input % 400 === 0) {
    return true;
  } else if(input % 100 === 0) {
    return false;
  } else if(input % 4 === 0){
    return true;
  } else {
    return false;
  }
};

module.exports = Year;
