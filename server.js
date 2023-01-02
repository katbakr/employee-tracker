// import sql, inquirer, and console.table ======================================================================
const mysql = require('mysql2');
//throwing error 'ERROR 1064'
const inquirer = require('inquirer');
const consoleTable = require('console.table');

//connection to database ========================================================================================
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'qIt&Ac+5@aSwosasPUSw',
    database: 'company_db',
});

connection.connect(err => {
    if (err) throw err;
    console.log('Welcome to Employee Tracker!')
    firstPrompt();
});


//first prompt to start ==========================================================================================
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
     //add later to improve user experience ======================================================================
            // 'Remove Department',
            // 'Remove Employee',
            // 'Remove Job',
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
// update later ==============================================================================================
               
                // case 'Remove Department':
                //     removeDepartment();
                //     break;

                // case 'Remove Employee':
                //     removeEmployee();
                //     break;

                // case 'Remove Job':
                    // removeJob();
                    // break;

                case 'Exit':
                    connection.end();
                    break;
                    default: connection.end();
            }
        });
};
// view all departments ========================================================================================
const viewDepartments = () => {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table(res);
        firstPrompt();
    });
};
// view all employees ===========================================================================================
const viewEmployees = () => {
    connection.query('SELECT employee.id, first_name, last_name, title, salary, dept_name, manager_id FROM ((department JOIN job ON department.id = job.department_id) JOIN employee ON job.id = employee.job_id);', 
        function (err, res) {
        if (err) throw err;
        console.table(res);
        firstPrompt();
    });
};
// view all jobs ================================================================================================
const viewJobs = () => {
    connection.query('SELECT * FROM job', function (err, res) {
        if (err) throw err;
        console.table(res);
        firstPrompt();
    });
};

// add new department ===========================================================================================
const addDepartment = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department',
            message: 'What would you like to name this Department?',
        },
    ])
    .then(answer => {
        connection.query(
            'INSERT INTO department (dept_name) VALUES (?)',
            [answer.department],
            function (err, res) {
                if (err) throw err;
                console.log('Department Added!')
                firstPrompt();
            }
        );
    });
};

//add new employee =============================================================================================
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the employee's first name?",
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the employee's last name?",
        },
        {
            type: 'input',
            name: 'job_id',
            message: "What is the employee's job ID?",
        },
        {
            type: 'input',
            name: 'manager_id',
            message: "What is the manager's ID?",
        },
    ])
    .then(answer => {
        connection.query(
            'INSERT INTO employee (first_name, last_name, job_id, manager_id) VALUES (?, ?, ?, ?)',
            [answer.first_name, answer.last_name, answer.job_id, answer.manager_id],
            function (err,res) {
                if (err) throw err;
                console.log('Employee Added!');
                firstPrompt();
            }
        );
    });
};

// add new job ==================================================================================================
const addJob = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'job_title',
            message: "What is the job title?",
        },
        {
            type: 'input',
            name: 'salary',
            message: "What is the salary for this job?",
        },
        {
            type: 'input',
            name: 'dept_id',
            message: "What is the department ID number?",
        },
    ])
    .then(answer => {
        connection.query(
            'INSERT INTO job (title, salary, department_id) VALUES (?, ?, ?)',
            [answer.job_title, answer.salary, answer.dept_id],
            function (err, res) {
                if (err) throw err;
                console.log('Job added!');
                firstPrompt();
            }
        )
    })
};

// make change to current employee by ID ========================================================================
const updateEmployee = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: "Enter employee ID",
        },
        {
            type: 'input',
            name: 'job_id',
            message: "Enter new job ID",
        },
    ])
    .then(answer => {
        connection.query(
            'UPDATE employee SET job_id=? WHERE id=?',
            [answer.job_id, answer.id],
            function (err, res) {
                if (err) throw err;
                console.log('Employee updated!');
                firstPrompt();
            }
        );
    });
};

// const removeDepartment = () => {
// inquirer.prompt([
//     {
//         type: 'input',
//         name: 'dept_id',
//         message: 'What is the department ID number?',
//     }
// ])
// }

// const removeEmployee = () => {

// }

// const removeJob = () => {

// }
