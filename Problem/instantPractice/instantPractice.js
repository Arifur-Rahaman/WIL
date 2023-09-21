//Prime number

const isPrime = (n) =>{
    if(n<2){
        return false
    }
    else{
        for(i=2; i<n; i++){
            if(n%i===0){
                return false
            }
        }
    }

    return true
}

const getPrimeNumberTillN = (n) =>{
    let primeNumbers = []
    for(let i=1; i<=n; i++){
        if(isPrime(i)){
            primeNumbers.push(i)
        }
    }
    return primeNumbers
}


console.log(getPrimeNumberTillN(5))

