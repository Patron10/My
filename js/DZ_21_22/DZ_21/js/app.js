var app1 = {
  stepen: function pow(a, n) {
    var nAbs = Math.abs(n);
    
    if (n == 0) {
      return 1;
    }
    
      var b = a;
    for (var i = 1; i < nAbs; i++) {
      b *= a;
    }    
    
    if (n < 0) {
        return 1/b;
    } else if (n > 0) {
        return b;  
    }
      return (pow(a, n));
  }
}
try {
    module.exports = app1;
} catch (e) {}
