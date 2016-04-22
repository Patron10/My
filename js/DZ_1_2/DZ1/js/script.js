a = prompt('Введите число');
n = prompt('Введите степень');

function pow(a, n) {
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
}
    
console.log(pow(a, n));