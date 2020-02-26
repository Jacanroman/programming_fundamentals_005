// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {

  let counter = 0;
  for (let k in object){
    counter++
  }
  return counter;
}
/*(Another Solution)

  return Object.keys(object).length;

*/



/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  return Math.min(...Object.values(object));
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  return Math.max(...Object.values(object));
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  const cloneOfObject = Object.assign({},object);
  return cloneOfObject; 
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {

  for(let k in object){
    return object[key];
  }
  return undefined;
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  
  for(let k in object){
    if(key in object){
      return true;
    }else{
      return false;
    }
  }
  
  /* another solution 
  return return Object.hasOwnProperty.call(object, key);
  */
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  counter = 0;
  for(let k in object){
    if(!isNaN(object[k])){
      counter += object[k]
    }
  }
  return counter;
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  var copyOfObject = {};
  for(var key in object){
  copyOfObject[object[key]] = key;
  }
  
  return copyOfObject;
  
  /* Another Solution, But I need to check why I have an error that say fromEntries is not a function.
    const copyOfObject = Object.fromEntries(
      Object.entries(object).map(([ key, val ]) => [ val, key ]));
      return copyOfObject
  */
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  let newObject = {}
  for(let k in arr){
    Object.assign(newObject, arr[k]);
  }
  return newObject;
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. It receives an object and a matcher function. It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. Otherwise, return null.
*/
function find(obj, matcherFunc) {
  
 return Object.values(obj).find(matcherFunc) || null;

 /* Another Solution
 let valueFind = Object.values(obj).find((val) => matcherFunc(val)) || null;
  return valueFind;
  */
}

/*
  This function allows you to test whether every value in an object matches a certain criteria. For example, is every value greater than 100? The function receives an object and a tester function. If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function every(obj, func) {
  /* One Solution
  let value = Object.values(obj).every((val) =>func(val));
  return value;
  */
  return Object.values(obj).every(func);
}

/*
  This function allows you to test whether some values in an object match a certain criteria. For example, are at least some of the values greater than 100? The function receives an object and a tester function. If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {
  let value = Object.values(obj).some((val)=>func(val));
  return value;
  
  /*Another solution
  return Object.values(obj).some(func);
  */
}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
