const http = require('http');

const server = http.createServer((req, res) => {
	if(req.url === '/') {
		res.end('Welcome');
	} else if(req.url === '/about') {
		res.end('About');
	}
	res.end('Greshka');
});

server.listen(5000);