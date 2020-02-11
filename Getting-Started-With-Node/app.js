// imports the HTTP module and binds it to a variable called http. The HTTP module comes with Node.js so we don't have to download it separately; we can just import it directly.
const http = require('http')

//  provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions (want app.js to send entire index.html fie as a response)
const fs = require('fs')

// binds a string containing the web address of our local server to a variable called hostname. Using the web address of our local server lets us serve our webpage to our local machine rather than to a URL. Regardless of which computer you are on, 127.0.0.1 is always localhost.
const hostname = '127.0.0.1';

// binds the port number we want to listen in on to a variable called port. When a server "listens" to a port it is listening for requests and responses sent to/from that port.
const port = 3000;


fs.readFile('index.html', (err, html) => {
    if (err) {
        throw err;
    }

    const server = http.createServer((req, res) => {  
    	res.statusCode = 200;  
        res.setHeader = ('Content-type', 'text/html');  
        res.write(html)
    	res.end();  
	});

	server.listen(port, hostname, () => {
    	console.log('Server running on port ' + port + '...');
	});
})


/*
// calls the createServer method on our http object. The result is a server instance, which we bind to a variable called server. We are setting the response's status code to be 200, which means 'OK'. We are setting the response's header to contain plain text. And res.end() concludes the server's response after rendering 'Hello World!'.
const server = http.createServer((req, res) => {  
    res.statusCode = 200;  
    res.setHeader = ('Content-type', 'text/plain');  
    res.end('Hello World!');  
});

// To tell the server to listen to the port we've specified and to send responses to the hostname we've specified, we call the .listen() method on our server object, passing in port, hostname and a callback function as arguments. The body of this callback function contains a print statement that will print to the Terminal while the server is running.
server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}...`)
})
*/