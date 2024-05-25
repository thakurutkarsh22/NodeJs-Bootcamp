const http = require("node:http");

const server = http.createServer((req, res) => {
  const url = req.url;
  console.log("ACCEPTING REQUEST FOR ", url);

  if (url === "/") {
    res.end("WELCOME TO HOMEPAGE");
  } else if (url === "/fitness") {
    res.write("nice you like fitness");
    res.end("\nWELCOME TO FITNESS");
  } else {
    res.write("1");
    res.write("\n2");
    res.write("\n3");
    res.write("\n4");
    res.write("\n5");

    res.end("\nENDING BALH BALH");

    // BEHIND THE SCENES of res.end("sdasd");
    // res.write("\nENDING BALH BALH")
    // res.end();
  }

  //   res.end("adasdasdas"); // DO NOT DO THIS AFTER res.end();

  //   res.write("hey there"); // DO NOT DO THIS AFTER res.end();
});

server.listen(8080, () => {
  console.log("starting the server ar port 8080");
});

/*

    RESPONSE OBJECT 
    
    1. we can write to response multiple times 
    2. IN THE END we can end the response 
    3. After res.end() NEVER do res.write() or res.end()


    REQUEST OBJECT
    1.  it contains URL, METHOD and other things.

*/
