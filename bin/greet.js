#!/usr/bin/env node
var greet = require('../index.js');
var parseArgs = require('minimist');

var arguments1 = process.argv.slice(2);
var arguments2 = parseArgs(arguments1);
console.log(arguments2);
console.log(greet(arguments2._,arguments2.drunk));

/**
* console.log("Hello World");
*/
