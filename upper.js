var map=require('through2-map');
var http=require('http');
var server=http.createServer(
	function(inStream,outStream)
	  { if(inStream.method !='POST')
		return outStream.end('not a post');
	    inStream.pipe(map
				(
			function(chunk)
				{ return chunk.toString().toUpperCase();}				)
			 ).pipe(outStream);
	  }
			    )
server.listen(Number(process.argv[2]));
