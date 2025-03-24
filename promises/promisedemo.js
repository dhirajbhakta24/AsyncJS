const p = new Promise(function exec(res,rej){
    console.log("Executor callback triggered by Promise constructor");
    const randomNumber = Math.floor(Math.random()*100);
    console.log(randomNumber);
    if(randomNumber % 2 === 0){
        //random number is even
        res();
    }
    else{
        //random Number is odd
        rej();
    }
});
console.log("Created promise object");
console.log(p);