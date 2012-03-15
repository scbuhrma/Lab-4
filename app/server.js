var http = require('http');
var redis = require('redis');

var client = redis.createClient();

http.createServer(function (req, res) {    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    client.mget(['awesome','cool','rad','groovy','gnarly'],function(error,exists){
	if(error){
	  exists = error;
	}else{
	  res.end("Awesome: " + exists[0]+ " cool: " + exists[1]+ 
	    " rad: " + exists[2] + " groovy: " + exists[3] + " gnarly: " + exists[4]);
	}
     });
}).listen(3000);

console.log('Server running on port 3000');