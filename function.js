var numOne = 10;
var numTwo = 20;

function add(varOne, varTwo ) {
  var result = varOne + varTwo;
  console.log(result);
}

add(numOne, numTwo);

// Function with a return value
function name(firstName, lastName) {
  var userName = firstName + " " + lastName;
  return userName;
}

console.log(name('heena', 'thaseen'));

// Anonymous function
// Function without a name and assigned to some variabe
var heena = function(firstName, lastName) {
  var userName = firstName + " " + lastName;
  return userName;
}

console.log(heena);
console.log(heena());
console.log(heena('heena', 'thaseen'));
var thaseen = heena('thaseen', 'heena');
console.log(thaseen);

// Calling a anonymous function
(function() {
  console.log('Anonymous function');
})();

// Passing a argument in anonymous function
(function(firstName, lastName) {
  console.log(firstName + " " + lastName);
})('heena', 'thaseen');

// Funtion with object properties
function meHeena(ht) {
  ht.lastName = 'thaseen';
  console.log(ht);
}
var meVar = {firstName: 'Heena'};
meHeena(meVar);

// Function defined based on Conditions
num = 5;
if (num == 5) {
  var heenaFun = function(arg) {
    arg.newMobile = 'gionee';
    console.log(arg);
  }
  var me = {oldMobile: 'nokia'}
  heenaFun(me);
}
