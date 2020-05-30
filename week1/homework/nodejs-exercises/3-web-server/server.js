
const http = require('http');
const fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
	console.log(req.url);
	if (req.url === '/') {
		res.writeHead(200, { 'Content-Type': 'text-html' });
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if (req.url === '/script.js') {
		res.writeHead(200, { 'Content-Type': 'text-javascript' });
		fs.createReadStream(__dirname + '/script.js').pipe(res);
	} else if (req.url === '/style.css') {
		res.writeHead(200, { 'Content-Type': 'text-css' });
		fs.createReadStream(__dirname + '/style.css').pipe(res);
	}
});

server.listen(3008); // The server listens on port 3008

