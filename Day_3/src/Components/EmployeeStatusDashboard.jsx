import React, { useState, useEffect } from 'react';
import MyAppBar from './assign';
const EmployeeStatusDashboard = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [filterBy, setFilterBy] = useState('all'); 
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const sampleEmployeeData = [
      { id: 1, name: 'John Doe', role: 'Developer', status: 'Active', department: 'IT' },
      { id: 2, name: 'Jane Smith', role: 'Designer', status: 'Inactive', department: 'Design' },
      { id: 3, name: 'Alice Johnson', role: 'Manager', status: 'Active', department: 'HR' },
      { id: 4, name: 'Bob Anderson', role: 'QA Engineer', status: 'Active', department: 'IT' },
      { id: 5, name: 'Eva Williams', role: 'Sales Representative', status: 'Inactive', department: 'Sales' },
      { id: 6, name: 'Michael Brown', role: 'Marketing Specialist', status: 'Active', department: 'Marketing' },
      { id: 7, name: 'Sophie Turner', role: 'Customer Support', status: 'Inactive', department: 'Support' },
      { id: 8, name: 'David Lee', role: 'Finance Analyst', status: 'Active', department: 'Finance' },
      { id: 9, name: 'Grace Chen', role: 'Data Scientist', status: 'Active', department: 'IT' },
      { id: 10, name: 'Ryan Taylor', role: 'Operations Manager', status: 'Inactive', department: 'Operations' },
    ];

    setEmployeeData(sampleEmployeeData);
  }, []);

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employeeData.filter(employee => (
    (filterBy === 'all' || employee.department === filterBy) &&
    (searchTerm === '' || employee.name.toLowerCase().includes(searchTerm.toLowerCase()))
  ));

  return (
    <div><MyAppBar/>
    <div style={{ margin: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>Employee Status Dashboard</h2>
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <label style={{ marginRight: '20px', fontSize: '16px', color: '#555' }} htmlFor="departmentFilter">Filter by Department:</label>
        <select
          id="departmentFilter"
          style={{
            padding: '12px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f8f8f8',
            color: '#333',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
          }}
          onChange={handleFilterChange}
          value={filterBy}
        >
          <option value="all">All Departments</option>
          <option value="IT">IT</option>
          <option value="Design">Design</option>
          <option value="HR">HR</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Support">Support</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
        </select>
        <input
          type="text"
          placeholder="Search by Name"
          style={{
            padding: '10px', 
            fontSize: '14px', 
            border: '1px solid #ddd',
            borderRadius: '8px',
            marginLeft: '950px',
          }}
          onChange={handleSearchChange}
          value={searchTerm}
        />
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ background: '#f4f4f4' }}>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>ID</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Name</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Role</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Status</th>
            <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map(employee => (
            <tr key={employee.id} style={{ background: '#fff', transition: 'background 0.3s ease' }}>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{employee.id}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{employee.name}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{employee.role}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{employee.status}</td>
              <td style={{ padding: '12px', textAlign: 'left', border: '1px solid #ddd' }}>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default EmployeeStatusDashboard;
