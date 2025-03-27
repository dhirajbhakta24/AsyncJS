/**.then is an function and it return a brand new promise */

const p1 = new Promise(function exec(res,rej){
   setTimeout(()=>{
    console.log("timer 1 done");
    res(100);
   },5000); 
});

const p2 = p1.then(function a(){console.log('a')},function b(){console.log('b')});
//p2 is a new promise , which is resolved with the return value of the callback function a and b