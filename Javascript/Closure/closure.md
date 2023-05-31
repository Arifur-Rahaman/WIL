## Closure:
In JavaScript, a closure is a function that references variables in the outer scope from its inner scope.

Closure means that an inner function always has access to the vars and parameters of its outer function, even after the outer function has returned.

***Closure hocche ekta function jeta tar inner scope er moddhe sobsomoy outer scope er refference dhore rakhe. Even outer scope ti jodi ekti function hoy function return kore (pop out from call stack) tobu o inner function outer function er refference dhore rakhe.***

Example:1
```javascript
function outer(){
    let name = 'Arifur Rahaman'
    return function(){
        console.log(name)
    }
}
const displayName = outer() //#Already outer function pop out from call stack
displayName() //Arifur Rahaman
```

