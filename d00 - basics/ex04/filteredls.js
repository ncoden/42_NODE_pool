
if (typeof(process.argv[2]) != undefined
	&& typeof(process.argv[3]) != undefined)
{
	var fs = require('fs');
	var path = require('path');

	fs.readdir(process.argv[2], function(err, list) {
		if (err) throw err;

		for (var i = 0; i < list.length; i++)
		{
			if (path.extname(list[i]) === ('.' + process.argv[3]))
				console.log(list[i]);
		}
	});
}
