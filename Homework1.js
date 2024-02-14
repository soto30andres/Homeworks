const myArray = [1,5,8,9,7];
/**
 * At: Receives as parameter the index of the array and returns the value of the index.
 */
myArray.at(4);

/**
 * Concat: concat two arrays into one
 * 
 */
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);


/**
 * copyWithin: copy a value with the next options:
 * - parameter 1: index to replace the value
 * - parameter 2: Index since you want to copy values
 * - parameter 3 (optional): Index until you want to copy values
 */
const arrayConcat = [1,2,3,4,5,6];

console.log(arrayConcat.copyWithin(0, 3, 4));

console.log(arrayConcat.copyWithin(1, 3));

/**
 * entries: returns an iterator object that contains key value for each array element 
 */
const arrayEntries = ['a', 'b', 'c'];
const iterator1 = arrayEntries.entries();


/**
 * evert: validate if every array object satisfy one condition. It returns a boolean
 */
const arrayEvery = [1, 30, 39, 29, 10, 13];
console.log(arrayEvery.every((x)=> x > 10));

/**
 * fill: replace a value with other static value within a range of indices.
 * param 1: static value
 * param 2 and 3: range of indices
 */
const arrayFill = [1, 2, 3, 4];
console.log(array1.fill(0, 2, 4));

/**
 * filter: receive a lambda expresion and returns the objects wich condition is true;
 */
const arrayFilter = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = arrayFilter.filter((x) => x.length > 6);



/**
 * Returns first element that lambda expression is true 
 */
const arrayFind = ['spray', 'elite', 'exuberant', 'destruction', 'present', 'present'];
const exuberant = array1.find((element) => element.equals("exuberant"));

/**
 * Returns index of first element that lambda expression applied is true
 */
const exuberantIndex = array1.findIndex((element) => element.equals("exuberant"));

/**
 * Returns last element that lambda expression is true 
 */
exuberant = array1.findLast((element) => element.equals("exuberant"));

/**
 * Returns index of first element that lambda expression applied is true
 */
exuberantIndex = array1.findLastIndex((element) => element.equals("exuberant"));


/**
 * Creates a new array with all sub-array elements into it
 */
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());


/**
 * its like a map and then a flat. So in the map function you can create sub-arrays and then reorganize the array to one level
 */
 let flatMap = arr1.flatMap((elemet => elemet === 1 ? 10 : elemet));

/**
 * executes every lambda function for all array elements 
 */
 response.forEach(element => console.log(element));


 /**
  * Creates another object from the array passed. The second parameter is optional
  */
 Array.from([1, 2, 3], (x) => x + x);


/**
 * Validate if a value is present in the array
 */
console.log(array1.includes(2));

/**
 * Return the index of the value passed as a paremeter. if the value doesnt exist it will return -1
 */
 console.log(array1.indexOf(2));


 /**
  * Validate if the parameter passed is an array
  */
 Array.isArray('[]');

/**
 * Join the elemnts of the array into a string
 */
 console.log(array1.join('-'));

/**
 * Returns an array iterator with the keys of the array
 */
 const iterator = array1.keys();


 /**
  * Return the last index of value passed as parameter or -1 if its not present
  */
 console.log(array1.lastIndexOf("exuberant"));

  /**
  * Return a new array with the result of the function passed as parameter
  */
array1.map(element => element + " new string");

/**
 * Creates a new instance of array
 */
Array.of('foo', 2, 'bar', true);

/**
 * Removes the last element from an array and returns that element
 */
array1.pop();


/**
 * Add a new element to an array and returns the new array length
 */
 array1.pop();

/**
 * Recive as a first parameter a callback bifunction to do some operation and the second parameter is the initial value will have our operation. 
 * It returns the result all elements operated as a single result
 */
 const arrayReduce = [1, 2, 3, 4];
 const sumWithInitial = arrayReduce.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );


/**
 * Return a new array instance but with reverse values
 */
const reversed = array1.reverse();

/**
 * Remove the first element of the array and return the element removed
 */
    const a = array1.shift();

/**
 * Returns a portion of array into an new array. You muts indicate the start and the end (end is not included)
 */
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.slice(2, 4);



/**
 * Returns true if at least one element is equals to the function passed as parameter
 */
 const array = [1, 2, 3, 4, 5];

 array.some((element) => element % 2 === 0);

 /**
  * Replace elements depending the parameter you pass. If you pass 0 as second parameter it wll add the element to array
  */
 const months = ['March', 'Jan', 'Feb', 'Dec'];
 months.sort();

 let index = 0;
 let quantityElementsToReplace = 0;
 months.splice(index, quantityElementsToReplace, 'Feb');

//replace 1 element at index 4
 months.splice(4, 1, 'Dec');

 
/**
 * Return a new array with reversed elements
 */

const reversedItems = months.toReversed();


/**
 * Returns an array with elements sorted
 */
 const sortedMonths = months.toSorted();


  /**
  * Copy of splice() function
  */
 months.toSpliced(index, quantityElementsToReplace, 'Feb');


/**
 * Return a string representing the array ad its elements
 */
console.log(months.toString());



/**
 * Add elements to the beginning of the array 
 */
 console.log(months.unshift("Jan"));


/**
 * returns an iterator object that contains the value for each array element 
 */
 const iteratorValues = months.values();

 /**
 * returns an new array with the element replaced at index indicated 
 */
 months.with(index, "Value")
