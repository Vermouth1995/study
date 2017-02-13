"use strict";
for (var i = 1;i < 11;i++) {
  //table border
  for (var j = 1;j < 11;j++) {
    var exp = 9 + '^' + j + '=' + Math.pow(9,j);
    if (j < 10) {
      process.stdout.write('+' + '—'.repeat(exp.length + 2));
    }
    else {
      console.log('+');
    }
  }
  //multiplication table
  for (var h = 1;h < 11;h++) {
    if (i < 10) {
      var exp_max = 9 + '^' + h + '=' + Math.pow(9,h);
      var expression = i + '^' + h + '=' + Math.pow(i,h);
      if (h <= i) {
        process.stdout.write('|' + ' ' + expression + ' '.repeat(exp_max.length - expression.length + 1));
      }
      else {
        if (h < 10) {
          process.stdout.write('|' + ' '.repeat(exp_max.length + 2));
        }
        else {
          console.log('|');
        }
      }
    }
  }
}
