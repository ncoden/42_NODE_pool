
var pages = {

	'/api/parsetime': function(url, req, res)
	{
		if (typeof(url.query) != 'undefined'
			&& typeof(url.query.iso) != 'undefined')
		{
			var date = new Date(url.query.iso);

			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(JSON.stringify({
				'hour': date.getHours(),
				'minute': date.getMinutes(),
				'second': date.getSeconds()
			}));
		}
		res.end();
	},

	'/api/unixtime': function(url, req, res)
	{
		if (typeof(url.query) != 'undefined'
			&& typeof(url.query.iso) != 'undefined')
		{
			var date = new Date(url.query.iso);

			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(JSON.stringify({
				'unixtime': date.getTime()
			}));
		}
		res.end();
	}

};

if (typeof(process.argv[2]) != 'undefined')
{
	var http = require('http');
	var url = require('url');

	var server = http.createServer(function(req, res)
	{
		var parse = url.parse(req.url, true);

		if (typeof(pages[parse.pathname]) != 'undefined')
			(pages[parse.pathname])(parse, req, res);
		else
		{
			res.writeHead(200, { 'Content-Type': 'text/plain' });
			res.end();
		}
	});

	server.listen(Number(process.argv[2]));
}
