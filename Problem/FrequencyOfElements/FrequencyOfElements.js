const arr = [10, 10, 20, 30, 50, 50]

const frequency = {}

for(let element of arr){
    if(frequency[element]){
        frequency[element] = frequency[element]+1
    }
    else{
        frequency[element] = 1
    }
}

console.log(frequency)