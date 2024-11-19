# Challenge 10, Employee Tracker

## Table of Contents
- Description
- Installation
- Usage
- Features
- Walkthrough Video
- Questions
- Resources


## Description
The Employee Tracker is a command-line tool that helps businesses keep track of their employees. It uses Node.js, Inquirer, and PostgreSQL to let users view and manage the company's departments, roles, and employees. This app makes it easier to organize employee information and helps businesses plan and grow.

## Installation
To install and set up the application, follow these steps:

**Clone the repository:**

- git clone https://github.com/Kristenshields/Challenge-10-Employee-Tracker.git

**Navigate to the directory:**

- cd Challenge-10-Employee-Tracker

**Install the required dependencies:**

- npm install

**Install the correct version of the Inquirer package:**

- npm i inquirer@8.1.2

**Set up PostgreSQL and create the necessary database and tables. You can find the required SQL scripts in the schema.sql file.**

## Usage
To start the application, run the following command in your terminal:
- npm run start

**You will be presented with a series of prompts. The available options are:**

- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role


## Features
- View all departments: Displays a table with department names and IDs.
- View all roles: Displays a table with role titles, IDs, department affiliations, and salaries.
- View all employees: Displays a table with employee details, including names, job titles, departments, salaries, and managers.
- Add a department: Prompts the user to enter a department name and adds it to the database.
- Add a role: Prompts the user to enter role details such as name, salary, and department, and adds the role to the database.
- Add an employee: Prompts the user to enter employee details such as first name, last name, role, and manager, and adds the employee to the database.
- Update an employee role: Allows the user to select an employee and assign them a new role.
Acceptance Criteria


## Walkthrough Video
This is a walkthrough video demonstrating the functionality of the Employee Tracker.
https://drive.google.com/file/d/1IcmkwwGGByGwY-28Yj2G5vN0JgXpRgRb/view?usp=sharing

## Questions
For any questions or feedback, feel free to contact me:
- GitHub: https://github.com/Kristenshields
- Email: shieldskristen0@gmail.com


## Resources
I had help with chatGPT, a few classmates (Skylar, Parker, & Hailey), and a friend of mine who is a Software Engineer.