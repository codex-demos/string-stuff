'use strict';

const lowercase = require('./utils/lowercase');
const reverseString = require('./utils/reverse');

const myname = 'Lewis';

const reversedName = reverseString(myname);
const lowerName = lowercase('LEWIS');
console.log(reversedName);
console.log(lowerName);
