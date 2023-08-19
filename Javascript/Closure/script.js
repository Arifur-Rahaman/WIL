// const outer = function(){
//     const name = 'Arifur Rahaman';
//     return function(){
//         console.log(name)
//     }
// }

// const inner = outer()

// console.dir(inner)


function printTillGivenNumber(n){
    for(let i = 0; i<=n; i++){
        setTimeout(()=>{
            console.log(i)
        }, i*1000)
    }
}
printTillGivenNumber(5)




