let str = 'I love javascript'

str = str.split(' ').map((word)=>word.split('').reverse().join('')).join(' ')

console.log(str)