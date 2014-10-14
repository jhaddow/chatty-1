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
            var messageObject = JSON.parse(postData);
            messageObject.timeStamp = Date.now();
            messages.push(messageObject);
            res.end(JSON.stringify(messageObject));
       });
        
    }
  if(req.method === 'GET'){
    res.end(JSON.stringify(messages))
    }
    if(req.method === 'OPTIONS'){
      res.end(JSON.stringify({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }))
    }
}
var http = require('http');
var port = 10101;
var messages = [{"text": "action"}, {"text": "fuckpj"}];
http.createServer(onRequest).listen(port);

