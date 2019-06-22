console.log('////////////// MAKING A FUNCTION A METHOD OF ANOTHER FUNCTION //////////////////');
// Normal Function
function Mobile(model, os, ram, version, rooted) {
  this.model = model;
  this.os = os;
  this.ram = ram;
  this.version = version;
  this.rooted = rooted;
  this.versionName = versionName;     // this statement, made versionName function a method of Mobile Function
}

function versionName() {
  var result = this.os + " - " + this.version;
  console.log(result);
}

var currentMobile = new Mobile('Gionee', 'Android', '3 GB', 'Nougat', true);
console.log(currentMobile);
console.log(currentMobile.versionName);
console.log(currentMobile.versionName());

console.log('////////////// GETTER AND SETTER //////////////////');
// Getter and Setter
var user = {
  name: null,
  get getUserName() {                        // get - gets the value of a specific property
    return this.name;
  },
  set setUserName(firstName) {
    this.name = firstName + " " + 'Thaseen';  // set - sets the value of a specific property
  }
};

console.log(user.name);
console.log(user.getUserName);
user.setUserName = 'Heena';
console.log(user.getUserName);
console.log(user.name);

console.log('////////////// ADDING GETTER AND SETTER TO AN OBJECT //////////////////');
// Normal way of adding getter and setter to an object while creating it
var heenaObject = {
  mobileBrand: 'Gio',
  get heena() { return this.mobileBrand; },
  set thaseen(me) { this.mobileBrand =  me; }
};

heenaObject.thaseen = 'Lenevo';
console.log(heenaObject.heena);

// Adding getter and setter to an object after creating the object using "Object.defineProperties" method
var thaseenObject = { mobileBrand: 'Gio'};

Object.defineProperties(thaseenObject, {
  'heena': { get: function() { return this.mobileBrand; } },
  'thaseen': { set: function(me) { this.mobileBrand = me; } }
});

thaseenObject.thaseen = 'Gionee';
console.log(thaseenObject.heena);

console.log('////////////// EXAMPLE: GETTER AND SETTER USING PROTOTYPE//////////////////');
// Example for Getter and Setter using prototype
var ht =  new Date();
console.log(ht);
console.log(ht.year);

var currentDate = Date.prototype;
Object.defineProperty(currentDate, 'year', {
  get: function() { return this.getFullYear(); },
  set: function(y) { this.setFullYear(y); }
});

// Results after prototyping date object above to get and set for just year
var now = new Date();
console.log(now);
console.log(now.year);