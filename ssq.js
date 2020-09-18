// console.log('你好啊！my name is dorsey');

const https = require('https');
const http = require('http');
const cheerio = require('cheerio');

let url = 'http://ipkokuchi-live.cablecast.info/jccip/web/common/icons/weather/wd100.svg';

http.get(url, function (res) {
    let chunks = [],
        size = 0;
    res.on('data', function (chunk) {
        chunks.push(chunk);
        size += chunk.length;
    });

    res.on('end', function () {
        console.log('数据包传输完毕');
        let data = Buffer.concat(chunks, size);
        let html = data.toString();
        console.log(html);
    });
});
