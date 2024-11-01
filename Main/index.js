import inquirer from "inquirer";

const options = {
        type: 'list',
        choices: [
            'view all departments', 
            'view all roles',
            'view all employees', 
            'add a department',
            'add a role', 
            'add an employee', 
            'update an employee role'
        ],   
    }

    inquirer.prompt(options).then((answers) => {
        switch (answers.license) {
            case 'view all departments':
                // Code to view all departments
                break;
            case 'view all roles':
                // Code to view all roles
                break;
            case 'view all employees':
                // Code to view all employees
                break;
            case 'add a department':
                // Code to add a department
                break;
            case 'add a role':
                // Code to add a role
                break;
            case 'add an employee':
                // Code to add an employee
                break;
            case 'update an employee role':
                // Code to update an employee role
                break;
            default:
                console.log("Invalid option");
        }
    });