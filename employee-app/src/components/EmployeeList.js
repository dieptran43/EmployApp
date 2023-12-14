// src/components/EmployeeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('https://localhost:7112/api/Employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees', error));
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`https://localhost:7112/api/Employees/${id}`);
            setEmployees(employees.filter(employee => employee.id !== id));
        } catch (error) {
            console.error('Error deleting employee', error);
        }
    };

    return (
        <div>
            <h2>Employee List</h2>
            <ListGroup divided>
                {employees.map(employee => (
                    <ListGroup.Item key={employee.id}>
                        <ListGroup.Item className="d-flex justify-content-between align-items-center">
                            <div>
                                <Link to={`/edit/${employee.id}`}>{employee.fullName}</Link>
                                <p>{employee.salary}</p>
                            </div>
                            <Button variant="danger" onClick={() => handleDelete(employee.id)}>Delete</Button>
                        </ListGroup.Item>
                    </ListGroup .Item>
                ))}
            </ListGroup >
            <Link variant="primary" to="/add">Add Employee</Link>
        </div>
    );
};

export default EmployeeList;
