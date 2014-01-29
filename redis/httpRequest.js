/***
*  It is sample code of http request module 
*  author agun
*
**/

var http = require('http');
var Iconv = require('iconv').Iconv;                 // you must done "npm install iconv"
var iconv = new Iconv('EUC-KR', 'UTF-8//TRANSLIT//IGNORE');


//The url we want is: 'www.random.org/integers/?num=1&min=1&max=10&col=1&base=10'
var options = {
      host: 'imnews.imbc.com',
      path: '/rss/news/news_01.xml'
};


callback = function(response) {
	var body = '';
	response.setEncoding('binary'); // this
	//another chunk of data has been recieved, so append it to `str`
	response.on('data', function (chunk) {
		body += chunk;
});

//////the whole response has been recieved, so we just print it out here

response.on('end', function () {
	
	var escape_text = escape(body);
	var toUTF8 = new Iconv('euckr', 'utf8//TRANSLIT//IGNORE');

	var toHex = function(n) {
		return parseInt('0x' + n);
 	};

	var str = escape_text.replace(/(%([^%]{2}))+/gim, function(chars) {
		var b;		       
		b = new Buffer(chars.split('%').slice(1).map(toHex));
		var utf8_str = toUTF8.convert(b).toString();
		return utf8_str;
	});

	console.log(str); // 한글이 잘 나옴..


 });
}
http.request(options, callback).end();