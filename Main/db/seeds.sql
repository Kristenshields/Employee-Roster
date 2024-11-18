INSERT INTO departments (department_name) VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO roles (title, salary, department_id) VALUES
('Software Engineer', 100000.00, 1),
('Accountant', 80000.00, 2),
('HR', 70000.00, 2),
('Lawyer', 120000.00, 3),
('Sales Lead', 80000.00, 4),
('customer service', 60000.00, 4);


INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
('John', 'Doe', 1, NULL),
('Mike', 'Chan', 1, 1),
('Ashley', 'Rodriguez', 2, 1),
('Kevin', 'Tupik', 3, NULL),
('Kunal', 'Singh', 4, 4),
('Malia', 'Brown', 5, NULL),
('Sarah', 'Lourd', 6, NULL),
('Tom', 'Allen', 6, 7);