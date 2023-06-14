const express = require('express');

const { readFile } = require('fs');

const app = express();
const port = 1245;

function countStudents(fileName) {
    const students = {};
    const fields = {};
    let count = 0;
    return new Promise((resolve, reject) => {
        readFile(fileName, 'utf8', (error, data) => {
            if (error) {
                reject(Error('Cannot load the database'));
            }
            if (data) {
                const lines = data.split('\n');
                for (let i = 0; i < lines.length; i += 1) {
                    if (lines[i].length > 0) {
                        count += 1;
                        const student = lines[i].split(',');
                        if (!fields[student[3]]) {
                            fields[student[3]] = [];
                        }
                        fields[student[3]].push(student[0]);
                    }
                }
                console.log(`Number of students: ${count}`);
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

app.get('/', (request, response) => {
    response.send('Hello Holberton School!');
}
);

app.get('/students', (request, response) => {
    countStudents(process.argv[2])

    .then(() => {
        response.send('This is the list of our students');
    }
    )

    .catch((error) => {
        response.send(error.message);
    }
    );
}
);

app.listen(port, () => {
}
);

module.exports = app;