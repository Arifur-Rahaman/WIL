const numbers =  [1, 2, 3, 4]

const fruits = [
    {
        product: 'Apple',
        price: 20
    },
    {
        product: 'Apple',
        price: 30
    },
    {
        product: 'Orange',
        price: 50
    }
]


const total = numbers.reduce((acc, curr)=>acc+curr)
const max = numbers.reduce((acc, curr)=> curr>acc? curr: acc)
const totalPrice = fruits.reduce((acc, curr)=> acc + curr.price, 0)
const highestPrice = fruits.reduce((acc, curr)=>acc.price>curr.price? acc: curr)

console.log(highestPrice)