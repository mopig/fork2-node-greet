#!/usr/bin/env node
var greet = require('../index.js');
var parseArgs = require('minimist');

process.argv.forEach(function(node,index, argv) {
  console.log(greet(argv).opt.string, parseArgs(argv)._);
})
/**
* console.log("Hello World");
*/
