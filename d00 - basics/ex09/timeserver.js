
if (typeof(process.argv[2]) != undefined)
{
	var net = require('net');
	var strftime = require('strftime');

	var server = net.createServer(function(socket)
	{
		socket.end(strftime("%Y-%m-%d %H:%M"));
	});

	server.listen(Number(process.argv[2]));
}
