function pow(x, n) {
  var result = x;
  for (var i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

var x = prompt('Назвіть число', '');
var n = prompt('Назвіть степінь', '');

alert( pow(x, n) );
console.log( pow(x, n) );