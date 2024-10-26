INSERT INTO departments (department_name) VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 100000.00, 1),
('Accountant', 80000.00, 2),
('Lawyer', 120000.00, 3),
('Sales Lead', 80000.00, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 3, 1),
('Kevin', 'Tupik', 4, 1),
('Kunal', 'Singh', 1, 4),
('Malia', 'Brown', 2, 4),
('Sarah', 'Lourd', 3, 4),
('Tom', 'Allen', 4, 4);