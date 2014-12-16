var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2),results = [],ctr = 0;
function print()
{
results.forEach(
	function (result)
	 {
		console.log(result);
	 }
		);
}
function get()
{
urls.forEach(function (url, i)
		 {http.get(url,
			 function (response) 
			{
				
				response.pipe(bl
				(
				function (err,data)
				 {
					results[i] = data.toString();
					ctr++;
					if (ctr === urls.length)
					 {
						print();
					 }
 				 }
				)
					    );
			}
			 );
		 }
	     );
}
get();
