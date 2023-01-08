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

function member(element, array) {
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




export { first, rest, isArray, isEmpty, unshift, eq, member, map, filter, reduce, reduceR, pipe };