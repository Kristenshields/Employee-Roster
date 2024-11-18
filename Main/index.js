import inquirer from 'inquirer';
import pkg from 'pg';
import dotenv from 'dotenv';

const { Client } = pkg;
// Load environment variables from .env
dotenv.config({ path: './Main/.env' });

console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  

client.connect()    
    .then(() =>  console.log('Connected to the database'))
     .catch(err => console.error("Error connecting to database", err.stack));
        
     options();
    


function options() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do:',
            choices: [
                'view all departments',
                'add a department',
                'view all roles',
                'add a role',
                'view all employees',
                'add an employee',
                'update an employee role',
                'exit' // Exit the application

            ]
        }
    ]).then(answers => {
        switch (answers.options) {
            case 'view all departments':
                viewAllDepartments();
                // Code to view all departments
                break;

            case 'add a department':
                addDepartment();
                // Code to add a department
                break;

            case 'view all roles':
                viewAllRoles();
                // Code to view all roles
                break;

            case 'add a role':
                addRole();
                // Code to add a role
                break;

            case 'view all employees':
                viewAllEmployees();
                // Code to view all employees
                break;

            case 'add an employee':
                addEmployee();
                // Code to add an employee
                break;

            case 'update an employee role':
                updateEmployeeRole();
                // Code to update an employee role
                break;

            case 'exit':
                client.end();
                console.log('Goodbye');
                break;

            default:
                console.log("Invalid option");
        }
    });
}

function viewAllDepartments() {
    client.query('SELECT * FROM department')
        .then(result => {
            console.table(result.rows);
            showMenu();
        })
        .catch(err => console.error("Error loading query", err.stack));
    // Code to view all departments
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department:'
        }
    ]).then(answers => {
        client.query('INSERT INTO department (name) VALUES ($1)', [answers.name])
            .then(() => {
                console.log('Department added successfully!');
                showMenu();
            })
            .catch(err => console.error("Error loading query", err.stack));
    });
    // Code to add a department
}
function viewAllRoles() {
    client.query('SELECT * FROM role')
        .then(result => {
            console.table(result.rows);
            showMenu();
        })
        .catch(err => console.error("Error loading query", err.stack));
    // Code to view all roles
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:'
        },
        {
            type: 'input',
            name: 'department_id',
            message: 'Enter the department id for the role:'
        }
    ]).then(answers => {
        client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [answers.title, answers.salary, answers.department_id])
            .then(() => {
                console.log('Role added successfully!');
                showMenu();
            })
            .catch(err => console.error("Error loading query", err.stack));
    });
    // Code to add a role
}
function viewAllEmployees() {
    client.query('SELECT * FROM employee')
        .then(result => {
            console.table(result.rows);
            showMenu();
        })
        .catch(err => console.error("Error loading query", err.stack));
    // Code to view all employees
}


function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: 'Enter the first name of the employee:'
        },
        {
            type: 'input',
            name: 'last_name',
            message: 'Enter the last name of the employee:'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the role id of the employee:'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: 'Enter the manager id of the employee:'
        }
    ]).then((answers) => {
        console.log(answers);
        const manager_id = answers.manager_id ? answers.manager_id : null;
        client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [answers.first_name, answers.last_name, answers.role_id, manager_id])
            .then(() => {
                console.log('Employee added successfully!');
                showMenu();
            })
            .catch(err => console.error("Error loading query", err.stack));
    });
    // Code to add an employee
}
function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: 'Enter the id of the employee:'
        },
        {
            type: 'input',
            name: 'role_id',
            message: 'Enter the role id of the employee:'
        }
    ]).then(answers => {
        client.query('UPDATE employee SET role_id = $1 WHERE id = $2', [answers.role_id, answers.employee_id])
            .then(() => {
                console.log('Employee role updated successfully!');
                showMenu();
            })
            .catch(err => console.error("Error loading query", err.stack));
    });
    // Code to update an employee role
}
function showMenu() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'continue',
            message: 'Do you want to continue?'
        }
    ]).then(answers => {
        if (answers.continue) {
            options();
        } else {
            client.end();
            console.log('Goodbye');

        }
    });
}
