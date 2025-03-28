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

//generator use
function* exec(){
    console.log("process started");
    const downloadedData = yield download("https://www.example.com");
    console.log("data downloaded is ", downloadedData);

    const fileResponse = writeFile(downloadedData,"file.txt");
    console.log("filewrite status  is ", fileResponse);

    const uploadResponse = upload("file.txt","https://www.example1.com");
    console.log("upload response is ", uploadResponse);

    console.log("process ended");

 
}