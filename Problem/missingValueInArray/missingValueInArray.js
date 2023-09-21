const arr= [1, 10]
const missing = []

const max= Math.max(...arr)
const min = Math.min(...arr)

for(i=min; i<=max; i++){
    if(!arr.includes(i)){
        missing.push(i)
    }
}

console.log(missing)