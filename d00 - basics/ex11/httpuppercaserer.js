
if (typeof(process.argv[2]) != undefined)
{
	var http = require('http');
	var map = require('through2-map');

	var server = http.createServer(function(req, res)
	{
		res.writeHead(200, {'content-type': 'text/plain'});

		if (req.method == 'POST')
		{
			req.pipe(map(function(chunk)
			{
				return (chunk.toString().toUpperCase());
			})).pipe(res);
		}
	});

	server.listen(Number(process.argv[2]));
}
