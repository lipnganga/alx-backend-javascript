const http = require('http');
const {readFile} = require('fs');

const hostname = '127.0.0.1';
const port = 1245;

function countStudents(path) {
    const students = {};
    const fields = {};
    let length = 0;
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(Error('Cannot load the database'));
            }
            if (data) {
                const lines = data.split('\n');
                length = lines.length;
                for (let i = 0; i < lines.length; i++) {
                    if (lines[i].length > 0) {
                        const student = lines[i].split(',');
                        if (!fields[student[3]]) {
                            fields[student[3]] = [];
                        }
                        fields[student[3]].push(student[0]);
                    }
                }
                console.log(`Number of students: ${length}`);
                for (const field in fields) {
                    if (field) {
                        const list = fields[field];
                        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
                    }
                }
            }
            resolve();
        });
    }
    );
}

const app = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Hello Holberton School!');
    }
    if (req.url === '/students') {
        countStudents(process.argv[2])
            .then(() => {
                res.write('This is the list of our students\n');
                res.end();
            })
            .catch((error) => {
                res.end(error.message);
            });
    }
}
);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}
);

module.exports = app;