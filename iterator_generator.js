// Object is an iterator
  // when it knows how to access items from a collection one at a time
  // while keeping track of its current position within that sequence

  // Iterator provides "next()" method, which returns next item in the sequence
  // The returnec object has two properties "done" and "value"

  function heenaIterator(thaseen) {
    var nextIndex = 0;
  
    return {
      next: function() {
        return nextIndex < thaseen.length ? {value: thaseen[nextIndex++], done: false} : {done: true};
      }
    };
  }
  
  var ht = heenaIterator(['heena', 'thaseen']);
  console.log(ht.next().done);
  console.log(ht.next().value);
  console.log(ht.next().value);
  console.log(ht.next().done);