// import sql, inquirer, and console.table
const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'qIt&Ac+5@aSwosasPUSw',
    database: 'company_db',
});

connection.connect(err => {
    if (err) throw err;
    console.log('Welcome to Employee Tracker!')
    startMenu();
});

const firstPrompt = () => {
    inquirer.prompt({
        type: 'list',
        name: 'start',
        message: 'What would you like to do?',
        choices: [
            'View all Departments',
            'View all Employees',
            'View all Jobs',
            'Add Department',
            'Add Employee',
            'Add Job',
            'Update an Employee Job',
            'Remove Department',
            'Remove Employee',
            'Remove Job',
            'Exit'
        ],
    })
        .then(Response => {
            switch (Response.start) {
                case 'View all Departments':
                    viewDepartments();
                    break;

                case 'View all Employees':
                    viewEmployees();
                    break;

                case 'View all Jobs':
                    viewJobs();
                    break;

                case 'Add Department':
                    addDepartment();
                    break;

                case 'Add Employee':
                    addEmployee();
                    break;

                case 'Add Job':
                    addJob();
                    break;

                case 'Update an Employee Job':
                    updateEmployee();
                    break;

                case 'Remove Department':
                    removeDepartment();
                    break;

                case 'Remove Employee':
                    removeEmployee();
                    break;

                case 'Remove Job':
                    removeJob();
                    break;

                case 'Exit':
                    connection.end();
                    break;
                    default: connection.end();
            }
        });
};

