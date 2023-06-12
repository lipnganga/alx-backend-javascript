//create a small server using http module
const http = require('http');

const port = 1245;
const host = '127.0.0.1';

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
    }
);

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
    }
);

module.exports = app;