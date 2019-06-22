const PI = 3.14;

// PI = 5;  // cannot assign/change value to constant

console.log(PI);
(function() {
  console.log(PI * 2);
  // PI = 5;  // cannot assign/change value to constant
  console.log(PI);
})();


// cannot declare a constant with the same name as a function
function heena() {};
// const heena = 10;  // SyntaxError


// cannot declare a constant with the same name as a variable
function thaseen() {
  const thaseen = 20;
  console.log(thaseen);
  // var heena;  // SyntaxError
}
thaseen();

// Properties of objects assigned to Constants
const HEENA_THASEEN= {'firstName': 'heena'};
HEENA_THASEEN.lastName = 'thaseen';
console.log(HEENA_THASEEN);