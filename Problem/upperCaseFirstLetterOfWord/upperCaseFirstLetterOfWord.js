let str = 'bangladesh india nepal'

str = str.split(' ').map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')

console.log(str)