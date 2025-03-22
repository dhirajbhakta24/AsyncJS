console.log("Starting the execution...");

function download(url, callback) {
  console.log("Started the download process from", url);
  setTimeout(() => {
    console.log('Downloaded the content from', url);
    const content = "dummy content"; // Simulating downloaded content
    callback(content);
  }, 2000);
}

function write(content, fileLocation, callback) {
  console.log("Started writing the downloaded content to", fileLocation);
  setTimeout(() => {
    console.log(`Wrote the content: "${content}" to`, fileLocation);
    callback();
  }, 2000);
}

function upload(fileName, uploadUrl, callback) {
  console.log(`Started the upload of ${fileName} to`, uploadUrl);
  setTimeout(() => {
    console.log('Uploaded the content to', uploadUrl);
    callback();
  }, 2000);
}

function urlProcess(url) {
  const fileLocation = "dummyFile.txt";
  const uploadUrl = "https://uploadserver.com/upload";

  download(url, (content) => {
    write(content, fileLocation, () => {
      upload(fileLocation, uploadUrl, () => {
        console.log(`File processing from ${url} is completed.`);
      });
    });
  });
}

// Start the process
urlProcess("https://example.com/file.txt");
