// Object is a collection of properties(with key and value)
// var object = {key: value, key: value}
// Almost everything is an object in javascript
// objectName.propertyName

// Objects in other languages
  // Associative arrays in PHP
  // Dictionaries in Python
  // Hash tables in C
  // Hash maps in Java
  // Hashes in Ruby and Perl

// Objects creation using different ways
  // Using an object literal
  // Using new keyword
  // Using Constructor
  // Using Object.create()   // ECMAScript 5

  console.log('////////////// CREATING OBJECT USING NEW KEYWORD //////////////////');
  // Creating a object
  var myMobile = new Object();
  myMobile.model = 'Gionee';
  myMobile.os = 'Android';
  myMobile.ram = '3GB';
  myMobile.version = 6;
  myMobile.versionName = 'marshmello';
  myMobile.rooted = true;
  
  console.log('////////////// ACCESSING OBJECT //////////////////');
  // Accessing
  console.log(myMobile);
  console.log(myMobile['model']);
  console.log(myMobile['manufacturer']);  // undefined
  
  console.log('////////////// EXAMPLE TO ASSIGN IN MANY WAYS //////////////////');
  // Example on how can we assign anything to object
  var heenaObject = new Object(), name = 'your name', randomNumber = Math.random(), thaseenObject = new Object();
  
  console.log(heenaObject);
  console.log(name);
  console.log(randomNumber);
  console.log(thaseenObject);
  
  heenaObject.designation = 'Developer';
  heenaObject['date created'] = new Date();
  heenaObject[name] = 'heena thaseen';
  heenaObject[randomNumber] = 'hjhj';
  heenaObject.generate = Math.random();
  heenaObject[''] = 'This is empty string ';
  heenaObject[thaseenObject] = 'hbh';
  thaseenObject.firstName = 'first name';
  thaseenObject.lastName = 'last name';
  heenaObject[thaseenObject.firstName] = 'heena';
  heenaObject[thaseenObject.lastName] = 'thaseen';
  
  console.log(heenaObject);
  console.log(thaseenObject);
  console.log(heenaObject[thaseenObject]);
  console.log(heenaObject[thaseenObject.firstName]);