a = prompt('Введите число');
n = prompt('Введите степень');

function pow(a, n) {
    
    if (n > 0) {
    
    var b = a;
          
    for (var i = 1; i < n; i++) {
    b *= a;
    
    }
    return b;
        }  else if 
         (n == 0)
            {
    b = 1;
                return b;
            }
    }

console.log('Результат = ', pow(a, n));
console.log('Результат в минусовой степени = ', 1/(pow(a, n)));

