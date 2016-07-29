var utils = require('./lib/utils.js').default;


exports.stateNames = function(test) {
  test.expect(2);
  console.log('Massachusetts', utils.stateCodeToString("25"));
  test.equal('Massachusetts', utils.stateCodeToString("25"));
  console.log('North Carolina', utils.stateCodeToString("37"));
  test.equal('North Carolina', utils.stateCodeToString("37"));
  test.done();
}
