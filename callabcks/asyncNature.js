setTimeout(function f(){
    console.log('Hello');
},10);

setTimeout(function g(){
    console.log('hello g');
},5);

let x =0;
for(let i =0;i<100000000000;i++){
    x= x+i;
}
