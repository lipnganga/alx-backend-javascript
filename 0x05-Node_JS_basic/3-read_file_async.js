const { readFile } = require('fs');

// return a promise
function countStudents(fileName) {
    return new Promise((resolve, reject) => {
        readFile(fileName, 'utf8', (error, data) => {
            if (error) {
                reject(Error('Cannot load the database'));
            }
            if (data) {
                const fields = {};
                let count = 0;
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
    });
}


module.exports = countStudents;