const arr = [1, 2, 3, 4]

const someResult = arr.some((element)=>element>3)

console.log(someResult)

const arr2 = [...Array(10)].map((_, i)=>i+1)
console.log(arr2)