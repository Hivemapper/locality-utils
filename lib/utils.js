'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stateCodes = require('./stateCodes.js');

var _stateCodes2 = _interopRequireDefault(_stateCodes);

var _typeCodes = require('./typeCodes.js');

var _typeCodes2 = _interopRequireDefault(_typeCodes);

var _typeCodeRules = require('./typeCodeRules.js');

var _typeCodeRules2 = _interopRequireDefault(_typeCodeRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  stateCodeToString: function stateCodeToString(stateCode) {
    if (typeof stateCode !== 'string') {
      throw 'State code must be a string';
    }

    if (stateCode.length !== 2) {
      throw 'State code must be two digits';
    }

    var matchedString = _stateCodes2.default[stateCode];
    if (typeof matchedString === 'undefined') {
      throw 'No matching state for state code ' + stateCode;
    }

    return matchedString;
  },
  typeCodeToString: function typeCodeToString(typeCode) {
    if (typeof typeCode !== 'string') {
      throw 'Type code must be a string';
    }

    if (typeCode.length !== 2) {
      throw 'Type code must be two digits';
    }

    var matchedString = _typeCodes2.default[typeCode];
    if (typeof matchedString === 'undefined') {
      throw 'Type code not handled: ' + typeCode;
    }

    return matchedString;
  },


  /*
   * typeCode is the Census' LSAD
   */
  fullNameForLocality: function fullNameForLocality(name, typeCode) {
    if (typeof typeCode !== 'string') {
      throw 'Type code must be a string';
    }

    if (typeCode.length !== 2) {
      throw 'Type code must be two digits';
    }

    var matchedString = _typeCodes2.default[typeCode];
    if (typeof matchedString === 'undefined') {
      throw 'Type code not handled: ' + typeCode;
    }

    if (_typeCodeRules2.default.suffix.indexOf(typeCode) >= 0) {
      return name + ' ' + matchedString;
    } else if (_typeCodeRules2.default.prefix.indexOf(typeCode) >= 0) {
      return matchedString + ' ' + name;
    } else {
      return name;
    }
  }
};