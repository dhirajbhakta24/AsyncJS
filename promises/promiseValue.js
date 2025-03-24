const p = new Promise(function exec(res,rej){
    console.log("Executor callback triggered by Promise constructor");
    setTimeout(()=>{
        const randomNumber = Math.floor(Math.random()*100);
        console.log(randomNumber);
        if(randomNumber % 2 === 0){
            //random number is even
            res(randomNumber); ///randomNumber - promise value
        }
        else{
            //random Number is odd
            rej(randomNumber); ///randomNumber - promise value
        }
    },5000);

});
console.log("Created promise object ");
console.log(p);