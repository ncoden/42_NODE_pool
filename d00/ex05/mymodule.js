
var fs = require('fs');
var path = require('path');

module.exports = function (dir, ext, callback)
{
	fs.readdir(dir, function(err, list)
	{
		if (err)
			return (callback(err));

		var		ret = Array();
		for (var i = 0; i < list.length; i++)
		{
			if (path.extname(list[i]) === ('.' + ext))
				ret[ret.length] = list[i];
		}

		callback(null, ret);
	});
}
