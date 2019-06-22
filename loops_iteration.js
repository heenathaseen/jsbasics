// for statement
for (var me = 0; me < 5; me++) {
    console.log('heena');
  }
  
  // while statement
  var i = 0;
  while (i < 5) {
    console.log('thaseen');
    i++;
  }
  
  // do-while statement
  var ok;
  do {
    ok += 1;
    console.log(ok);
  } while (ok < 5);
  
  // labeled statement
  d = 0;
  heenaLoop:                // this is label
  while (d < 2) {
    console.log('Hey...');
    d++;
  }
  
  // break statement
  for (var me = 0; me < 5; me++) {
    console.log('heena');
    if (me == 3) {
      break;
    }
  }
  
  // continue statement
  var c = 0, p = 0;
  while (c < 6) {
    c++;
    console.log('C after increment ' + c);
    if (c == 3) {
      console.log('C inside if ' + c);
      continue;
    }
    p += c;
    console.log('P after incrementing c ' + p);
  }
  
  // breaking to a label
  var a = 0, b = 0;
  labelCancelLoop:
  while (true) {
    console.log('Outer loops : .. heena .. : ' + 'Loop ' + a);
    a += 1;
    b = 1;
    while (true) {
      console.log('Inner loops : .. thaseen .. : ' + b);
      b += 1;
      if (b === 5 && a === 5) {
        break labelCancelLoop;
      } else if (b === 7 ){
        break;
      }
    }
  }
  
  // continuing to a label
  var heena = 0;
  var thaseen = 10;
  checkHeenaandThaseen:
    while (heena < 5) {
      console.log(heena);
      heena += 1;
      checkThaseen:
        while (thaseen> 5) {
          console.log(thaseen);
          thaseen -= 1;
          if ((thaseen % 2) == 0) {
            continue checkThaseen;
          }
          console.log(thaseen + ' is odd.');
        }
        console.log('heena = ' + heena);
        console.log('thaseen = ' + thaseen);
    }
  
  // for...in statement
  function heenaThaseen(data, dataName) {
    var result = '';
    for (var i in data) {
      result += '\n' + dataName + '.' + i + ' = ' + data[i];
    }
    return result;
  }
  
  var data_input = {model:'Gionee', os:'Android - Marshmello'}
  var data_input_name = 'mobile'
  console.log(heenaThaseen(data_input, data_input_name));
  
  // for...of statement
  var heenaNumbers = [5, 8, 9, 2];
  heenaNumbers.name = 'heena';
  
  for (var thaseen in heenaNumbers) {
    console.log(thaseen);
  }
  
  for (var heena of heenaNumbers) {
    console.log(heena);
  }
  
  console.log(heenaNumbers);
  