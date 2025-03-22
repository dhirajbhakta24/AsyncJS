function createTimer(time,timerId){
    console.log("creating a new time with id ",timerId);
    setTimeout(()=>{
        console.log(`Timer with id ${timerId} is done`);
    },time);
    console.log("successfully created a new timer with id", timerId);
}
console.log("Starting the code");
createTimer(2000,1);
createTimer(0,2);
console.log("starting the loop");
for(let i =0;i<100000000;i++){
    //something is going on
}
console.log("loop is done");
console.log("last line of the code done"); 