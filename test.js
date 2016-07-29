var utils = require('./lib/utils.js').default;


exports.stateNames = function(test) {
  test.expect(2);
  test.equal('Massachusetts', utils.stateCodeToString("25"));
  test.equal('North Carolina', utils.stateCodeToString("37"));
  test.done();
}

exports.badArguments = function(test) {
  test.expect(3);
  test.throws(function() {utils.stateCodeToString(25)}, 'State code must be a string');
  test.throws(function() {utils.stateCodeToString('2')}, 'State code must be two digits');
  test.throws(function() {utils.stateCodeToString('99')}, 'No matching state for state code 99');
  test.done();
}
