

// import http module
var http = require("http");

// import OS functionality
const os = require('os');


// CREATE SERVER
http.createServer(function (request, response) {
    // Send the HTTP header   
    // HTTP Status: 200 : OK  
    // Content Type: text/plain  
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send the response body as "Hello World"  
    response.end('Hello World\n');
}).listen(8081);
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/');
console.error('Error Occured!');
console.debug('This is a debug message');

// REPL stands for Read Eval Print and Loop.
/* This is an interactive shell for executing JS
 * It takes in JS for scripts and executes them in immediately
*/

// NodeJS Glodal objects

// __dirname
console.log("dir: " + __dirname);
// __filename
console.log("filename: " + __filename);


// OS commands
console.log("OS Arch: " + os.arch + ", Platform:" + os.platform() + ", Release:" + os.release());

// NodeJS Timer

// setInterval
/* setInterval(function () {
    console.log("setInterval: Hey! 5 seconds completed!..");
}, 5000); */

// setTimeout
/* setTimeout(function () {
    console.log("setTimeout: Hey! 1000 millisecond completed!..");
}, 1000); */

// NodeJS DNS
const dns = require('dns');
dns.lookup('www.tolamile.com', (err, addresses, family) => {
    console.log('addresses:', addresses);
    console.log('family:', family);
}); 

/* Node.js Net
Node.js provides the ability to perform socket programming. 
We can create chat application or communicate client and server applications using socket programming in Node.js. 
The Node.js net module contains functions for creating both servers and clients. 
*/
