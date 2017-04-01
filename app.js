//copy from greet.txt to greetcopy.txt to greet.txt.gz
//readable and writabale file using pipe
//Asynchronous and Stream 

//require system file module .js
var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');
var writabale = fs.createWriteStream(__dirname + '/greetcopy.txt');
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');
var gzip = zlib.createGzip();

readable.pipe(writabale);
readable.pipe(gzip).pipe(compressed);