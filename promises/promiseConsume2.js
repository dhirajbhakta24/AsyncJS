console.log('start');
const p1 = new Promise(function exec(res,rej){
    console.log("Executor callback triggered by promise constructor: p1");
    setTimeout(()=>{
        console.log("Timer of p1 done");
        res(100);
    },1000);
});
p1.then(function a(){console.log('a')}, function b(){ console.log("b")});
setTimeout(function timerCB(){
    console.log("timer 1 done");
},2000);

const p = new Promise(function exec(res,rej){
    console.log("Executor callback triggered by promise constructor");
    setTimeout(function prCB(){
        const randomNumber = Math.floor(Math.random()*100);
        console.log(randomNumber);
        if(randomNumber % 2===0){
            res(randomNumber);
        }
        else{
            rej(randomNumber);
        }
    },3000);
});
p.then(function f(){console.log("executing f")}, function g(){console.log("executing g")});
p.then(function h(){console.log("executing h")}, function i(){console.log("executing i")});
for(let i =0;i<10000000;i++){}
console.log("end");
