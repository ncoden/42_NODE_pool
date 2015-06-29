
if (typeof(process.argv[2]) != undefined
	&& typeof(process.argv[3]) != undefined)
{
	var http = require('http');
	var fs = require('fs');

	var server = http.createServer(function(req, res)
	{
		res.writeHead(200, {'content-type': 'text/plain'});

		var src = fs.createReadStream(process.argv[3]);
		src.pipe(res);
	});

	server.listen(Number(process.argv[2]));
}
