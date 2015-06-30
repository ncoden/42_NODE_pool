
var http = require('http');
var bl = require('bl');

var pending = 0;		// Number of pending request
var datas = Array();	// Responses of requests

for (var i = 2; i < process.argv.length; i++)
{
	(function(i)
	{
		http.get(process.argv[i], function(response)
		{
			// Increment pending count
			pending++;

			// On response :
			response.setEncoding("utf8");
			response.pipe(bl(function(err, data)
			{
				if (err)
					return(console.error(err));

				// Save datas
				datas[i - 2] = data.toString();
				pending--;

				// If it was the last request, log datas
				if (pending == 0)
				{
					for (var i_ret = 0; i_ret < datas.length; i_ret++)
						console.log(datas[i_ret]);
				}
			}));
		});
	})(i);
}
