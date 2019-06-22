var userName;
console.log(userName);

userName = 'Heena';
console.log(userName);

var username = 'Thaseen';
console.log(username);

userName = 'Heena Thaseen';
console.log(userName);

// Variables with different data types
var userAge = '20';
console.log(userAge);

var isUserCode = true;
console.log(isUserCode);

var userLocations = ['Vellore', 'Chennai', 'Arcot'];
console.log(userLocations[0]);
console.log(userLocations[1]);
console.log(userLocations[2]);
console.log(userLocations[3]);

var userDetails = ['Heena', 'Thaseen', 20, true, 'Arcot'];
for (var i = 0; i < userDetails.length; i++) {
  console.log(userDetails[i]);
}

// Changing datatype of variable by changing value
var me = 'Heena Thaseen';
console.log(me);
me = 20
console.log(me);
me = false;
console.log(me);
me = ['Heena', 'Thaseen']
console.log(me);

// Object
/*
the querySelector can only be used when script running on browser
using query selector to select h1 html tag
storing the selected object in myVariable
*/

// var myVariable = document.querySelector('h1');