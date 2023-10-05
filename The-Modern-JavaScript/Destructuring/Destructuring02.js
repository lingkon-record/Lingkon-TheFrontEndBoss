const company = {
  name: 'TechCo',
  CEO: {
    firstName: 'John',
    lastName: 'Doe',
  },
  employees: [
    { firstName: 'Alice', lastName: 'Johnson', department: 'Engineering' },
    { firstName: 'Bob', lastName: 'Smith', department: 'Sales' },
    { firstName: 'Charlie', lastName: 'Brown', department: 'Marketing' },
  ],
};

const {
  name: companyName,
  CEO: { firstName: CEOFirstName, lastName: CEOLastName },
  employees: [firstEmployee, ...restEmployees],
} = company;

console.log(`Company Name: ${companyName}`);
console.log(`CEO: ${CEOFirstName} ${CEOLastName}`);
console.log(`First Employee: ${firstEmployee.firstName} ${firstEmployee.lastName}`);
console.log(`Rest of the Employees:`);
for (const employee of restEmployees) {
  console.log(`${employee.firstName} ${employee.lastName}, Department: ${employee.department}`);
}
