#Usage
####ES6
```
import localityUtils from 'locality-utils';
let stateName = localityUtils.stateCodeToString('05');
// "Arkansas"
```

####Older Javascript
```
var localityUtils = require('locality-utils').default;
var stateName = localityUtils.stateCodeToString('05');
// "Arkansas"
```

#Methods
##`stateCodeToString(stateCode)`
**Source:** http://www.census.gov/geo/reference/ansi_statetables.html

`stateCode` argument is a numeric string and is always two digits. Returns a string formatted for human consumption, like `South Carolina` or `U.S. Minor Outlying Islands`.

Throws an error if the stateCode argument is malformed, or if there was no matching state.

##`typeCodeToString(typeCode)`
**Source:** https://www.census.gov/geo/reference/lsad.html

`typeCode` argument is a two digit string but doesn't have to be numeric. The returned string is meant to be a suffix for the locality's name. So 25 maps to `city` which would be a suffix for _Burlingame_. The capitalization logic for these suffixes is taken directly from the Census. So you have `city` but also `County`. It seems like the suffix is capitalized when the place is usually referenced with the suffix included. So you may say _San Mateo_ for the city, but it's always _San Mateo County_.

The Census also has a set of prefixes when are commented out in typeCodes.js.

Returns a string formatted for human consumption, like `census-designated place` or `Municipio`.

Throws an error if the typeCode argument is malformed, or if there was no matching type.

##`fullNameForLocality(name, typeCode)`

Transforms the name and type code and class code as they come from the Census into what we want to call a locality in our database. The Census calls these `NAME` and `LSAD` and `CLASSFP`. Example:
```
var county = {NAME: 'San Mateo', LSAD: '06', CLASSFP: 'C1'}
var fullName = fullNameForLocality(county.NAME, county.LSAD, county.CLASSFP); // Returns 'San Mateo County'
```

Throws an error if the typeCode argument is malformed, or if there was no matching type.

#Developing
The code in `/lib/` is compiled by Babel. The source code is written in ES6 and lives in `/src/`

####Compile
```
npm run compile
```

####Test
```
npm test
```

Please do not add to this module without adding a unit test.
