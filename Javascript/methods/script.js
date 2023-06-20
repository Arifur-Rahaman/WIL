// const arr = [5, 6, 2,2, 3]

// const compare = (a, b) =>{
//     if(a>b){
//         return 1
//     }
//     else if(b>a){
//         return -1
//     }
//     else{
//         return 0
//     }
// }
// arr.sort(compare)

// arr.forEach(element=>console.log(element))


// const shopping = [
//     {
//         product: 'apple',
//         price: 150
//     },
//     {
//         product: 'apple',
//         price: 100
//     },
//     {
//         product: 'apple',
//         price: 50
//     },
//     {
//         product: 'orange',
//         price: 10
//     }
// ]

// const total = shopping.reduce((acc, curr) => {
//     if (acc[curr.product]) {
//         return acc = { ...acc, [curr.product]: acc[curr.product] + curr.price }
//     } else {
//         return acc = { ...acc, [curr.product]: curr.price }
//     }
// }, {})

// console.log(total)


arr = [1, 2, 3, 4]

const max = arr.reduce((max, curr)=> curr>max? curr : max)
console.log(max)

//Protita iteration er por jeta return korbo seta e acc er value







