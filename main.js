import './style.css'
import { isArray, isEmpty, first, rest, unshift, pipe } from './jscheme'

console.log(isArray([1, 2, 3]))
console.log(isEmpty([1, 2, 3]))
console.log(first([1, 2, 3]))
console.log(rest([1, 2, 3]))
console.log(rest([1]))
console.log(rest([]))
console.log(unshift(1, [2, 3]))

console.log(pipe([1, 2, 3],
                 first,
                 x => x + 1, 
                 x => x * 2, 
                 x => x - 1))




