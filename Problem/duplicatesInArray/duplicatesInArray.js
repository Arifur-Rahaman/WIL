const arr = [10, 10, 10, 20, 30, 20, 30, 50]

let seen = new Set()
let duplicates = []

for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    if (!seen.has(current)) {
        seen.add(current)
    }
    else {
        duplicates.push(current)
    }
}

console.log(seen, duplicates)