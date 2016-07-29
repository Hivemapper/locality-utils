import stateCodes from './stateCodes.js';

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
  }
}
