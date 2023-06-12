const shouldResolved = false
const promise1 = new Promise((resolve, reject) => {
    if (shouldResolved) {
        resolve('Promise has been resolved')
    }
    else {
        reject('Something error')
    }
})

console.log('before promise')

setTimeout(() => {
    console.log('inside set time out')
}, 0)

promise1.then((res) => {
    console.log(res)
}).catch(error => {
    console.log(error)
})

console.log('After promise')

/***Fetching data */

const fetchData = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log('error', error)
    }
}
fetchData()

//Promise.all

const promise5 = Promise.resolve('Promise1')
const promise6 = Promise.resolve('Promise2')
const promise7 = Promise.resolve('Promise3')

Promise.all([promise5, promise6, promise7])
.then(res=>{
    console.log('promise result',res)
})
.catch(error=>{
    console.log(error)
})