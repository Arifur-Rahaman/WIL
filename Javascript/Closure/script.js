// const outer = function(){
//     const name = 'Arifur Rahaman';
//     return function(){
//         console.log(name)
//     }
// }

// const inner = outer()

// console.dir(inner)

const obj1 ={
    name: 'arifur',
    displayName(){
        console.log(this.name)
    }
}

const displayName = obj1.displayName

const obj2 = {
    name: 'siflu',
    displayName
}

obj2.displayName()

