import './style.css'
import { isArray, isEmpty, first, rest, cons } from './jscheme'

console.log(isArray([1, 2, 3]))
console.log(isEmpty([1, 2, 3]))
console.log(first([1, 2, 3]))
console.log(rest([1, 2, 3]))
console.log(rest([1]))
console.log(rest([]))
console.log(cons(1, [2, 3]))




