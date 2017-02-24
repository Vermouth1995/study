"use strict";

for (var i = 1;i < 10;i++) {
  var str = '+' + '—'.repeat(8);
  console.log(str.repeat(9) + '+');
  for (var j = 1;j <= i;j++) {
    var expression = i + '*' + j + '=' + i*j + ' ';
    process.stdout.write('|' + ' ' + expression + ' '.repeat(7 - expression.length));
  }
  if(j < 10){
    process.stdout.write(('|' + ' '.repeat(8)).repeat(10 - j)  + '|' + '\n');
  }
  else{
    console.log('|');
  }
}
console.log(str.repeat(9) + '+');
