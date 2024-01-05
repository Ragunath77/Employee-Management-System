import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/home';
import About from './Components/about';
import Contact from './Components/contact';
import EmployeeStatusDashboard from './Components/EmployeeStatusDashboard';
import LoginComponent from './Components/login';
import SignUpComponent from './Components/Sign';
import FAQs from './Components/faq';
import settings from './Components/settings';
const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/Sign" element={<SignUpComponent />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/faq" element={<FAQs />} />
        <Route path="/EmployeeStatusDashboard" element={<EmployeeStatusDashboard />} />
        <Route path="/settings" element={<settings/>}/>
      </Routes>
    </Router>
    </div>
  );
};

export default App;

