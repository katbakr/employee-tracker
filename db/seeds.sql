INSERT INTO department (dept_name)
VALUES
('Health Department'),
('IT Department'),
('Department of Public Works');

INSERT INTO job (title, salary, department_id)
VALUES
('Assistant', 38000, 1),
('Accountant', 45000, 2),
('Janitor', 39000, 3),
('Engineer', 52000, 2),
('Attorney', 63000, 3);

INSERT INTO employee (first_name, last_name, job_id, manager_id)
VALUES
('Gavin', 'McClure', 5, NULL),
('Tilly', 'Holden', 1, 4),
('Aaron', 'Roach', 3, 1),
('Sebastian', 'Gibbs', 2, NULL),
('Maddison', 'Ballard', 4, NULL);
-- ('', '', , ),
-- ('', '', , ),