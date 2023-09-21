const getFibonacciSeries = (n) =>{
    const fibonacciSeries = [0, 1]
    for(let i=2; i<n; i++){
        let next = fibonacciSeries[i-1] + fibonacciSeries[i-2]
        fibonacciSeries.push(next)
    }

    return fibonacciSeries
}

console.log(getFibonacciSeries(5))