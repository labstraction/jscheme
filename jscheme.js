function first(array) {
    if (isArray(array) && !isEmpty(array)) {
        return array[0]
    } else {
        return null;
    }
}

function isArray(array) {
    return Array.isArray(array);
}

function isEmpty(array) {
    return array ? array.length === 0 : true;
}

function rest(array) {
    if (isArray(array)) {
        return array.slice(1);
    } else {
        return null;
    }
}

function cons(element, array) {
    if (isArray(array)) {
        return [element, ...array];
    } else {
        return null;
    }
}

function isObject(object) {
    return typeof object === 'object';
}

function eq(a, b) {
   return Object.is(a, b);
}

function member(element, array) {
    if (isArray(array)) {
        return array.includes(element);
    } else {
        return false;
    }
}



export {first, rest, isArray, isEmpty, cons, isObject, eq, member};