var app1 = require('../js/app.js');

describe("app1", function() {
  it("stepen()", function() {
      // prepare
      var result;
      //act
    result = app1.stepen(2, 2);
      //assert
    expect(result).toEqual(4);
  });
});