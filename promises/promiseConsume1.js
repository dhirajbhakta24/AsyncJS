console.log("start");
setTimeout(function timerCB(){
    console.log("timer 1 done");
},1000);

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
    },2000);
});
p.then(function f(){console.log("executing f")}, function g(){console.log("executing g")});
p.then(function h(){console.log("executing h")}, function i(){console.log("executing i")});
for(let i =0;i<10000000;i++){}
for(let i =0;i<10000000;i++){}
console.log("end");
