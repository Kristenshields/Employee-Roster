import pg from "pg";
import inquirer from "inquirer";

const createPromptModule = inquirer.createPromptModule();

function options() {
    createPromptModule([
        {
            type: 'list',
            name: 'options',
            message: 'What would you like to do?',
            choices: [
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update an employee role'
            ]
        }
    ]).then((answers) => {
        switch (answers.options) {
            case 'view all departments':
                viewAllDepartments();
                // Code to view all departments
                break;
            case 'view all roles':
                viewAllRoles();
                // Code to view all roles
                break;
            case 'view all employees':
                viewAllEmployees();
                // Code to view all employees
                break;
            case 'add a department':
                addDepartment();
                // Code to add a department
                break;
            case 'add a role':
                addRole();
                // Code to add a role
                break;
            case 'add an employee':
                addEmployee();
                // Code to add an employee
                break;
            case 'update an employee role':
                updateEmployeeRole();
                // Code to update an employee role
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
    function viewAllRoles() {
        client.query('SELECT * FROM role')
        .then(result => {
            console.table(result.rows);
            showMenu();
        })
        .catch(err => console.error("Error loading query", err.stack));
        // Code to view all roles
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
    function addDepartment() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Enter the name of the department'
            }
        ]).then((answers) => {
            client.query('INSERT INTO department (name) VALUES ($1)', [answers.name])
            .then(() => {
                console.log('Department added successfully');
                showMenu();
            })
            .catch(err => console.error("Error loading query", err.stack));
        });
        // Code to add a department
    }
    function addRole() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter the title of the role'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter the salary of the role'
            },
            {
                type: 'input',
                name: 'department_id',
                message: 'Enter the department id of the role'
            }
        ]).then((answers) => {
            client.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [answers.title, answers.salary, answers.department_id])
            .then(() => {
                console.log('Role added successfully');
                showMenu();
            })
            .catch(err => console.error("Error loading query", err.stack));
        });
        // Code to add a role
    }
    function addEmployee() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'first_name',
                message: 'Enter the first name of the employee'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'Enter the last name of the employee'
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter the role id of the employee'
            },
            {
                type: 'input',
                name: 'manager_id',
                message: 'Enter the manager id of the employee'
            }
        ]).then((answers) => {
            client.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [answers.first_name, answers.last_name, answers.role_id, answers.manager_id])
            .then(() => {
                console.log('Employee added successfully');
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
                message: 'Enter the id of the employee'
            },
            {
                type: 'input',
                name: 'role_id',
                message: 'Enter the role id of the employee'
            }
        ]).then((answers) => {
            client.query('UPDATE employee SET role_id = $1 WHERE id = $2', [answers.role_id, answers.employee_id])
            .then(() => {
                console.log('Employee role updated successfully');
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
        ]).then((answers) => {
            if (answers.continue) {
                options();
            } else {
                console.log('Goodbye');
                client.end();
            }
        });
    }
    