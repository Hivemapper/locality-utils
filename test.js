var utils = require('./lib/utils.js').default;


exports.stateNames = function(test) {
  test.expect(2);
  test.equal('Massachusetts', utils.stateCodeToString('25'));
  test.equal('North Carolina', utils.stateCodeToString('37'));
  test.done();
}

exports.typeCodes = function(test) {
  test.expect(2);
  test.equal('census-designated place', utils.typeCodeToString('57'));
  test.equal('comunidad', utils.typeCodeToString('55'));
  test.done();
}

exports.badArguments = function(test) {
  test.expect(11);
  test.throws(function() {utils.stateCodeToString(25)}, 'State code must be a string');
  test.throws(function() {utils.stateCodeToString('2')}, 'State code must be two digits');
  test.throws(function() {utils.stateCodeToString('99')}, 'No matching state for state code 99');

  test.throws(function() {utils.typeCodeToString(25)}, 'Type code must be a string');
  test.throws(function() {utils.typeCodeToString('2')}, 'Type code must be two digits');
  test.throws(function() {utils.typeCodeToString('B1')}, 'Type code not handled: B1');

  test.throws(function() {utils.fullNameForLocality('name', 25, 'C1')}, 'Type code must be a string');
  test.throws(function() {utils.fullNameForLocality('name', '2', 'C1')}, 'Type code must be two digits');
  test.throws(function() {utils.fullNameForLocality('name', 'B1', 'C1')}, 'Type code not handled: B1');

  test.throws(function() {utils.fullNameForLocality('name', '25', 2)}, 'Class code must be a string');
  test.throws(function() {utils.fullNameForLocality('name', '25', 'C')}, 'Class code must be two digits');
  test.done();
}

exports.fullName = function(test) {
  test.expect(4);
  test.equal('Pizza Gore', utils.fullNameForLocality('Pizza', '31', 'C1'));
  test.equal('San Francisco', utils.fullNameForLocality('San Francisco', '25', 'C1'));
  test.equal('Greeley County', utils.fullNameForLocality('Greeley County unified government (balance)', '25', 'C8'));
  test.equal('Indianapolis', utils.fullNameForLocality('Indianapolis city (balance)', '25', 'C8'));
  test.done();
}
