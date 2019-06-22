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
// const chaal = 10;  // SyntaxError


// cannot declare a constant with the same name as a variable
function thaseen() {
  const heena = 20;
  console.log(heena);
  // var heena;  // SyntaxError
}
heena();

// Properties of objects assigned to Constants
const CHAAL_PRITAM = {'firstName': 'heena'};
CHAAL_PRITAM.lastName = 'thaseen';
console.log(HEENA_THASEEN);