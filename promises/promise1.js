/*
1.how to create a promise 
2.how to consume a promise

1.How to create a promise
______________________________________________________________
in js we have a promise constructor 


new Promise()

*/

const p = new Promise(function(res,rej){
    console.log("executot callback triggeres by Promise constructor");
});

console.log('create the promise object');
console.log(p);