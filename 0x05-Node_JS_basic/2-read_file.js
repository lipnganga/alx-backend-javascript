const fs = require('fs');

function countStudents(fileName) {
    try {
        const data = fs.readFileSync(fileName, 'utf8').split('\n');
        let count = 0;
        const fields = {};
        for (const row of data) {
        if (row.length > 0) {
            count += 1;
            const student = row.split(',');
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
    } catch (err) {
        throw new Error('Cannot load the database');
    }
    }

module.exports = countStudents;