function* Generator(){
    console.log("inside generator" )
    yield 100;
    yield 99;
    yield 80;
    yield 77;
    yield -1;

}

const i = Generator();
console.log(i.next());

console.log("out");

console.log(i.next());

console.log("out");

console.log(i.next());

console.log("out");
