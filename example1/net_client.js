const net = require('net');  
const client = net.connect({port: 33895}, () => {//use same port of server  
  console.log('connected to server!');  
  client.write('world!\r\n');  
});  
client.on('data', (data) => {  
  console.log(data.toString());  
  client.end();  
});  
client.on('end', () => {  
  console.log('disconnected from server');  
});  
client.on('error', (err) => {
    // handle errors here  
    throw err;
});