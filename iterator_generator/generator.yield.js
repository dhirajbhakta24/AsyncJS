function* gen(){
    console.log("inside generator");
    const x = yield 10;
    const y = x + 30;
    yield y;
}

const it = gen();
console.log(it.next()); //{value :10 ,done:false}
//some logic
console.log(it.next(11));//this line will  inject 11 at line 3 the place where 
//last yield was called -> x= 11 { value: 41, done: false }
console.log(it.next()); //{ value: undefined, done: true }

