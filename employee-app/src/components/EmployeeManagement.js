// src/components/EmployeeManagement.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';

const EmployeeManagement = () => {
  return (
    <div>
      <h1>Employee Management Tittel</h1>
      <Router>
        <Routes>
          <Route path="/" exact element={<EmployeeList/>} />
          <Route path="/add" exact element={<EmployeeForm />} />
          <Route path="/edit/:id" exact element={<EmployeeForm />} />
        </Routes>
      </Router>
    </div>
  );
};

export default EmployeeManagement;
