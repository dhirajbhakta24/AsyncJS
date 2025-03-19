console.log("async js" );
 
// callbacks are function that are passed as an argument to a function 
// the function which accepts arguments as function are called as HIGHER ORDER FUNCTION 
const array = [1,2,3,4,5 ]
const arr = [1,2,3,4,5 ]
array.map(function f(){
    x = x*2;
});

function myMap(arr,fn){
    let result = []; //Created a new array to store the results
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i));
    }
    return result;
}

console.log(myMap(arr, function g(element){
    return element**2;
}));


// we can decide on the runtime what to send as an  implementation of callback.


/*DISADVANTAGEs OF CALLBACK
1.Callback Hell(minor disadvantage , readibility problem)
_________________________________________________________
->function f1(function(){
    f2(function(){
        f3(function(){
            f4(function(){
            
                })                  
        })
    })
})


2.!!Inversion of control!!
__________________________________________________________
->
*/



