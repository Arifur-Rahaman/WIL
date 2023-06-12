## Promise

Promise is an object which represent eventual completion or failure of an asyncronus operation.

```javascript
const promise1 = new Promise((resolve, reject)=>{
    resolve('Promise has been resolved')
})
```

### promise.all :
promise.all take a array of promise as parameter and return a single promise. This single promise full fill when all input promise with an array fo full fillment value. It reject if any of promise rejetcs with first rejection value.

```javascript
   const promise1 = Promise.resolve('Promise1')
   const promise2 = Promise.resolve('Promise2')
   const promise3 = Promise.resolve('Promise3')

   Promise.all[promise1, promise2, promise3]
   .then((res)=>{
    console.log(res)
   })
   .catch(err=>{
    console.log(err)
   })
```

