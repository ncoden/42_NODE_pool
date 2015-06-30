
if (typeof(process.argv[2]) != undefined)
{
	var fs = require('fs');
	var content;
	if (content = fs.readFileSync(process.argv[2], 'utf8'))
	{
		var lines = content.split('\n').length - 1;
		console.log(lines);
	}
}
