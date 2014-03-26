module.export = ->
  greet = require("../lib/index.js")
  parseArgs = require("minimist")
  arguments1 = process.argv.slice(2)
  arguments2 = parseArgs(arguments1)
  console.log arguments2
  console.log greet(arguments2._, arguments2.drunk)
  return
