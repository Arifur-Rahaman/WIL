let str= 'asdfg     gggkkdd'

const freq = {}
let maxChar= ''
let charCount = 0

for(let i=0; i<str.length; i++){
    let currentElement = str[i]
    if(freq[currentElement]){
        freq[currentElement] = freq[currentElement] + 1
    }
    else{
        freq[currentElement] = 1
    }
}

for(let char in freq){
    if(freq[char]>charCount){
        charCount = freq[char]
        maxChar = char
    }
}

console.log(maxChar, charCount)
console.log(freq)