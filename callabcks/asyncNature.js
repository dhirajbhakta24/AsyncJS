function myMap(arr,fn){
    let result = []; //Created a new array to store the results
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i));
    }
    return result;
}
