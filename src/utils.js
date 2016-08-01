import stateCodes from './stateCodes.js';
import typeCodes from './typeCodes.js';
import typeCodeRules from './typeCodeRules.js';

export default {
  stateCodeToString(stateCode) {
    if (typeof stateCode !== 'string') {
      throw 'State code must be a string';
    }

    if (stateCode.length !== 2) {
      throw 'State code must be two digits';
    }

    let matchedString = stateCodes[stateCode];
    if (typeof matchedString === 'undefined') {
      throw `No matching state for state code ${stateCode}`;
    }

    return matchedString;
  },

  typeCodeToString(typeCode) {
    if (typeof typeCode !== 'string') {
      throw 'Type code must be a string';
    }

    if (typeCode.length !== 2) {
      throw 'Type code must be two digits';
    }

    let matchedString = typeCodes[typeCode];
    if (typeof matchedString === 'undefined') {
      throw `Type code not handled: ${typeCode}`;
    }

    return matchedString;
  },

  /*
   * typeCode is the Census' LSAD
   * classCode is the Census' CLASSFP
   */
  fullNameForLocality(name, typeCode, classCode) {
    if (typeof typeCode !== 'string') {
      throw 'Type code must be a string';
    }

    if (typeCode.length !== 2) {
      throw 'Type code must be two digits';
    }

    if (typeof classCode !== 'string') {
      throw 'Class code must be a string';
    }

    if (classCode.length !== 2) {
      throw 'Class code must be two digits';
    }

    let matchedString = typeCodes[typeCode];
    if (typeof matchedString === 'undefined') {
      throw `Type code not handled: ${typeCode}`;
    }

    if (typeCodeRules.suffix.indexOf(typeCode) >= 0) {
      return `${name} ${matchedString}`;
    } else if (typeCodeRules.prefix.indexOf(typeCode) >= 0) {
      return `${matchedString} ${name}`;
    } else if (classCode === 'C8') {
      return name
      .replace('(balance)', '')
      .replace('unified government', '')
      .replace('city', '')
      .trim();
    } else {
      return name;
    }
  }
}
