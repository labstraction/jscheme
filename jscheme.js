function first(array) {
  return isArray(array) && !isEmpty(array) ? array[0] : null;
}

function isArray(array) {
  return Array.isArray(array);
}

function isEmpty(array) {
  return isArray(array) ? array.length === 0 : true;
}

function rest(array) {
  return isArray(array) ? array.slice(1) : null;
}

function unshift(element, array) {
  return isArray(array) ? [element, ...array] : null;
}

function eq(a, b) {
  return Object.is(a, b);
}

function includes(element, array) {
  return isArray(array) ? array.includes(element) : null;
}

function map(fn, array) {
  return isArray(array) ? array.map(fn) : null;
}

function filter(fn, array) {
  return isArray(array) ? array.filter(fn) : null;
}

function reduce(fn, array, initial) {
  return isArray(array) ? array.reduce(fn, initial) : null;
}

function reduceR(fn, array, initial) {
  return isArray(array) ? array.reduceRight(fn, initial) : null;
}

function pipe(value, ...fns) {
  return fns.reduce((acc, fn) => fn(acc), value);
}

function some(fn, array) {
  return isArray(array) ? array.some(fn) : null;
}

function every(fn, array) {
  return isArray(array) ? array.every(fn) : null;
}

function concat(array1, array2) {
  return isArray(array1) && isArray(array2) ? array1.concat(array2) : null;
}

function join(separator, array) {
  return isArray(array) ? array.join(separator) : null;
}

function mapValues(fn, obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[key] = fn(obj[key]);
    return acc;
  }, {});
}

function mapKeys(fn, obj) {
  return Object.keys(obj).reduce((acc, key) => {
    acc[fn(key)] = obj[key];
    return acc;
  }, {});
}

function filterValues(fn, obj) {
  return Object.keys(obj).reduce((acc, key) => {
    if (fn(obj[key])) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

function filterKeys(fn, obj) {
  return Object.keys(obj).reduce((acc, key) => {
    if (fn(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}

function reduceValues(fn, obj, initial) {
  return Object.keys(obj).reduce((acc, key) => {
    return fn(acc, obj[key]);
  }, initial);
}

function reduceKeys(fn, obj, initial) {
  return Object.keys(obj).reduce((acc, key) => {
    return fn(acc, key);
  }, initial);
}


export {
  first,
  rest,
  isArray,
  isEmpty, 
  unshift, 
  eq, 
  includes, 
  map, 
  filter, 
  reduce, 
  reduceR, 
  pipe, 
  some, 
  every, 
  concat, 
  join, 
  mapValues, 
  mapKeys, 
  filterValues, 
  filterKeys, 
  reduceValues, 
  reduceKeys
};