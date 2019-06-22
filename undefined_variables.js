// Declarations in js
  //  var - Variable
  //  let - local Variable, block-scoped
  //  const - block-scoped, read-only named constant

  var a;
  console.log(a);
  
  console.log(b);
  var b;
  
  // console.log(c);  // Reference Error: c is not defined
  
  let x;
  console.log(x);
  
  // console.log(y);
  let y;              // Reference Error: y is not defined
  console.log(y);
  
  // Determining undefined variables
  var heena;
  if (heena === undefined) {
    console.log('Given variable is undefined');
  } else {
    console.log('Given variable is defined with some value');
  }
  
  // Undefined variable behaviour
  var ht;
  if (ht) {
    console.log('variable is defined');
  } else {
    console.log('undefined default variable behaves as False');
  }
  
  // NaN
  var thaseen;
  console.log(thaseen + 5); // undefined value converts to NaN when used in numeric context
  thaseen= 'heena';
  console.log(thaseen + 5);
  
  // Null
  var someVariable = null; // null value behaves as 0 in numeric context
  console.log(someVariable * 4);