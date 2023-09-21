const arr = [2,7,11,4,-2]
const resultArr = []

//Solution: 1
// const calculateSum = (position, arr)=>{
//     let sum = 0
//     for(let i=0; i<arr.length; i++){
//         if(i !== position){
//             sum = sum + arr[i]
//         }
//     }
//     return sum
// }

// for(let i=0; i<arr.length; i++){
//     resultArr.push(calculateSum(i, arr))
// }


//Optimal Solution

const sum = arr.reduce((acc, current)=> acc + current, 0)
for(let i=0; i<arr.length; i++){
    resultArr[i] = sum-arr[i]
}
console.log(resultArr)