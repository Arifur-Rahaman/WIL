const binarySearch = (arr, n) =>{
    let left = 0;
    let right = arr.length-1

    while(left<=right){
        let mid = Math.floor(left+right/2)

        if(n===arr[mid]){
            return true
        }
        else if(n>arr[mid]){
            left = mid+1
        }
        else{
            right = mid-1
        }
    }

    return false
}

console.log(binarySearch([1,2,3,4,5,6], 0))