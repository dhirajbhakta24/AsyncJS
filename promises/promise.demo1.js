//mimic the download , write and upload function using promises

function download(url){
    return new Promise(function exec(res,rej){
        console.log('starting download from ', url);
        setTimeout(function(){
            let data = "some data from " + url;
            console.log("Downloaded data from ",url);
            res(data);
        },3000);
    });
}

function writeFile(data,fileName){
    return new Promise(function exec(res,rej){
        console.log("writing" , data , " to file");
        setTimeout(function(){
            console.log("writing to file" , fileName, " is done");
            let status ="success";
            res(status);
        },3000)
    });
}

function upload(fileName, url){
    return new Promise(function exec(res,rej){
        console.log("uploading file" , fileName , " to ",url);
        setTimeout(function(){
            console.log("uploading  file" , fileName, " to",url ," is done");
            let uploadStatus ="success";
            res(uploadStatus);
        },3000)
    });
}
//these are for indivual operation and are running parallel
download("https://example.com").then(function f(value){
    console.log("downloaded data is ", value);
})

writeFile("some data", "file.txt").then(function f(value){
    console.log("Write status is" , value);
})

upload("file.txt" , "https://www.example1.com").then(function f(value){
    console.log("upload status is" , value);
})

//this is sequential execution

//download -> waiting for downloading to complete -> we execute function f -> f calls writeFile
//when file writing is done p2 is resolved -> then g is executed -> g calls upload -> when upload is done
//p3 is resolved -> then h is executed 
console.log("sequential exec started");

const p2 = download("https://www.example.com")
.then(function(value){
    console.log("downloaded data is",value);
    return writeFile(value,"file.txt");
})

const p3 = p2.then(function g(value){
    console.log("file written ", value);
    return upload(value , "https://www.example1.com");
});

p3.then(function h(value){
    console.log("file uploaded" , value)
})

//another way of doing the samething 
//.then() chaining

download("https//www.example.com")
.then(function f(value){
    console.log("Downloaded data is", value);
    return writeFile(value , "file.txt");
})
.then(function g(value){
    console.log("file written ",value);
    return upload(value , "https://www.example.com");
})
.then(function h(value){
    console.log("file uploaded" , value);
});