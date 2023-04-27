// Define the Student interface
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

// Create two student objects
const firstStudent: Student = {
	firstName: "Obed",
	lastName: "Ehoneah",
	age: 97,
	location: "Accra"
}

const secondStudent: Student = {
	firstName: "Frank",
	lastName: "Ehoneah",
	age: 79,
	location: "Kumasi"
}

// Create an array of students
const studentsList = [firstStudent, secondStudent];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})