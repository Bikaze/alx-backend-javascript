interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Doe',
  age: 22,
  location: 'Los Angeles',
};

const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement('table');

// Create a table header
const thead: HTMLTableSectionElement = table.createTHead();
const headerRow: HTMLTableRowElement = thead.insertRow();
const headerCell1: HTMLTableCellElement = headerRow.insertCell();
const headerCell2: HTMLTableCellElement = headerRow.insertCell();
headerCell1.textContent = 'First Name';
headerCell2.textContent = 'Location';

// Append rows to the table for each student
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();
  const firstNameCell: HTMLTableCellElement = row.insertCell();
  const locationCell: HTMLTableCellElement = row.insertCell();
  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;
});

// Append the table to the document body
document.body.appendChild(table);