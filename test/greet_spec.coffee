greet=require("../lib/index.js")
describe "greet", ->
  it "should greet a person by name", ->
    expect(greet("jj", false)).to.eql "hello, jj"
    return

  it "should greet a person flirtatiously if drunk", ->
    expect(greet("jj", true)).to.eql "hello jj, you look sexy today"
    return

  return
