if (true) {
    var x = 5; // can access this var declaration outside this if block
  }
  console.log(x);
  
  if (true) {
    let y = 5;  // can't acces this let declaration outside the if block
  }
  // console.log(y); // ReferenceError: y is not defined, coz scope of the variabe within if block
  
  // Variable hoisting
    // can refer to a variable declared later, without getting a exception
    // hoisted variable will return a undefined value
  
  var c;
  console.log(c === undefined); // refering to a variable declared later
  // console.log(c); // ReferenceError: c is not defined
  c = 3;
  console.log(c);
  
  
  var name = 'heena';   // global varible
  (function() {
    var name;   // local variable
    console.log(name);  // refering to a variable declared later
    name = 'heena thaseen';
    console.log(name);
  })();
  console.log(name);
  
  
  let g;
  // console.log(g); // ReferenceError
  g = 20;
  console.log(g);