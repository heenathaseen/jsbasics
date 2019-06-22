// Function declaration
heena();  // calling a function refered later

function heena() {
  console.log('Hey Heena');
}

// Function expression
// thaseen(); // Type Error: thaseen is not a function
var thaseen = function() {
  console.log('Hey Thaseen');
};
console.log(thaseen);

// Function Scope
var firstName = 'Heena' , lastName = 'Thaseen';

function userDetails() {
  var number = 7, age = 20;

  function userName(first, last) {
    return first + " " + last;
  }
  return userName(firstName, lastName);
}

userDetails();