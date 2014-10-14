var onRequest = function(req, res){
res.writeHead(200, {
  'Connection': 'close',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
})
if (req.method == 'POST') {
       var postData = '';
       req.on('data', function(piece) {
           postData += piece.toString();
        });    
        req.on('end', function() {
            
            messages.push(JSON.parse(postData));
            res.end(JSON.stringify(postData));
       });
        
    }
  if(req.method === 'GET'){
    res.end(JSON.stringify(messages))
    }
}
var http = require('http');
var port = 10101;
var messages = [];
http.createServer(onRequest).listen(port);

