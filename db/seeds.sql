INSERT INTO department (dept_name)
VALUES
('Management'),
('Sales Associates'),
('Specialists'),
('Receiving'),
('Sanitation');

INSERT INTO job (title, salary, department_id)
VALUES
('Store Manager', 86000, 1),
('Assistant Manager', 67000, 1),
('Department Supervisor', 46000, 1),
('Lumber Associate', 39000, 2),
('Paint Associate', 39000, 2),
('Forklift Operator', 43000, 4),
('Freight Associate', 41000, 4),
('Janitor', 39000, 5),
('Appliance Specialist', 41000, 3),
('Doors/Windows Specialist', 41000, 3);

INSERT INTO employee (first_name, last_name, job_id, manager_id)
VALUES
('Kevin', 'Hurley', 1, NULL),
('Dori', 'Gardener',2 , 1),
('Josh', 'Adams', 2, 1),
('Tasha', 'Knox', 3, 3),
('Grace', 'Whetsell', 3, 3),
('Katrina', 'Baker', 3, 2),
('Mandy', 'Confer', 3, 2),
('James', 'Spence', 4, 6),
('Allen', 'Collier', 4, 6),
('Molly', 'Murphy', 5, 4),
('Gypsy', 'Stephens', 5, 4),
('Dustin', 'Pelkin', 6, 3),
('Katie', 'Spack', 6, 3),
('Aleks', 'Norman', 7, 3),
('Hannah', 'Hilton', 8, 1),
('Beth', 'Olsen', 10, 2),
('Sarah', 'Holt', 9, 2);

-- ('', '', , ),
-- ('', '', , ),