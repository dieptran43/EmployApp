// src/components/EmployeeForm.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
// import { Button, Form, Link } from 'react-bootstrap';

const EmployeeForm = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    fullName: '',
    avatar: '',
    birthday: '',
    salary: '',
  });

  useEffect(() => {
    if (id) {
      axios.get(`https://localhost:7112/api/Employees/${id}`)
        .then(response => setFormData(response.data))
        .catch(error => console.error('Error fetching employee details', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await axios.put(`https://localhost:7112/api/Employees/${id}`, formData);
      } else {
        await axios.post('https://localhost:7112/api/Employees', formData);
      }
      history('/');
    } catch (error) {
      console.error('Error saving employee', error);
    }
  };

  return (
    <div className="container mt-5">
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="formFullName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="formFullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="formAvatar" className="form-label">Avatar</label>
        <input type="text" className="form-control" id="formAvatar" name="avatar" value={formData.avatar} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="formBirthday" className="form-label">Birthday</label>
        <input type="text" className="form-control" id="formBirthday" name="birthday" value={formData.birthday ?? Date.now()} onChange={handleChange} required />
      </div> 
      <div className="mb-3">
        <label htmlFor="formSalary" className="form-label">Salary</label>
        <input type="number" className="form-control" id="formSalary" name="salary" value={formData.salary} onChange={handleChange} required />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
      <button type="button" variant="secondary" onClick={() => history('/')}>Cancel</button>
    </form>
  </div>
  );
};

export default EmployeeForm;
