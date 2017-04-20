const http = require('http');
const fs = require('fs');

http.createServer((_, res) => fs.createReadStream('./index.html').pipe(res))
.listen(3000);

