
if (typeof(process.argv[2]) != undefined
	&& typeof(process.argv[3]) != undefined)
{
	var mymodule = require('./mymodule.js');

	mymodule(process.argv[2], process.argv[3], function(err, list)
	{
		for (i = 0; i < list.length; i++)
			console.log(list[i]);
	});
}
