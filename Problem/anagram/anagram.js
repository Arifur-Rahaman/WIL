const str1 = 'triangle'
const str2 = 'integraleff'

let frequency = {}

if(str1.length !== str2.length){
    'Not Anagram'
}

for(let i=0; i<str1.length; i++){
    let currentCh = str1[i]
    if(frequency[currentCh]){
        frequency[currentCh] = frequency[currentCh] + 1
    }
    else{
        frequency[currentCh] = 1
    }
}

for(let i=0; i<str2.length; i++){
    let currentCh = str2[i]
    if(frequency[currentCh]  != undefined){
        frequency[currentCh] = frequency[currentCh] - 1
    }
}

console.log(frequency)

if(Object.values(frequency).find(value=>value !== 0)){
    console.log('Not Anagram')
}
else{
    console.log('Anagram')
}