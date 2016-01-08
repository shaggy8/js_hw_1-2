function pow (x, n) {
  var number = x;
  for (var i = 1; i < n; i++) {
    x *= number;
  }
  return x;
}

var x = prompt('Назвіть число', '');
var n = prompt('Назвіть степінь', '');

alert( pow (x, n) );
console.log( pow (x, n) );