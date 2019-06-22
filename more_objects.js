console.log('////////////// USING OBJECT LITERAL TO CREATE A OBJECT //////////////////');
var userDetails = {name: {firstName: 'heena', lastName: 'thaseen'}, age: 20, location: 'arcot'};
console.log(userDetails);

// statement creates an objects and assigns to it
var heena = 5;
if(heena= 5) var x = {name: 'Heena Thaseen'};       // if statement true the object is created
console.log(x);

console.log('////////////// CONSTRUCTOR FUNCTION - TO CREATE A OBJECT //////////////////');
// Constructor function - another way to create objects (refer - objects.js object creation)
function userMobile(model, os, ram, version, versionName, rooted) {
  this.model = model;
  this.os = os;
  this.ram = ram;
  this.version = version;
  this.versionName = versionName;
  this.rooted = rooted;
}

var mobileOne = new userMobile('Gionee', 'Android', '3 GB', 7.1, 'Marshmello', true);
console.log(mobileOne);
console.log(mobileOne['model']);
console.log(mobileOne['manufacturer']);  // undefined

var mobileTwo = new userMobile('Lenevo', 'Android', '', '', 'Lollipop', );
console.log(mobileTwo);
console.log(mobileTwo['model']);

console.log('////////////// ADDING //////////////////');
// Adding property
console.log(mobileOne['manufacturer']);
mobileOne['manufacturer'] = 'Google';
console.log(mobileOne);
console.log(mobileOne['manufacturer']);

console.log('////////////// DELETING //////////////////');
// Deleting property
console.log(mobileOne['manufacturer']);
delete mobileOne.manufacturer;
console.log(mobileOne['manufacturer']);

console.log('////////////// COMPARING //////////////////');
var heenaName = {name: 'heena'};
var thaseenName = {name: 'heena'};

console.log(heenaName == thaseenName);
console.log(heenaName === thaseenName);

var heenaThaseen= {name: 'heena'};
var thaseenHeena = heenaThaseen;

console.log(heenaThaseen == thaseenHeena);
console.log(heenaThaseen === thaseenHeena);
