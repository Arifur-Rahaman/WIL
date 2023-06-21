//***Print hello world using recursion ***/
// function printHelloWorld(n){
//     if(n>0){
//         console.log('Hello world')
//         printHelloWorld(n-1)
//     }
//     else return
// }

// printHelloWorld(5)

//***Get sum using recursion***/
// function sum(n){
//     if(n>0){
//         return n+sum(n-1)
//     }
//     else{
//         return 0
//     }
// }

// const result = sum(3)

// console.log(result)


//***Get factorial using recursion***/
function getFeactorial(n){
    if(n>0){
        return n*getFeactorial(n-1)
    }
    else return 1
}

const result = getFeactorial(4)
console.log(result)

