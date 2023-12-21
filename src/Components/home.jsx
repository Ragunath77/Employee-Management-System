import React from 'react';
import './assign.css';
import emp from './emp.png';
import emp1 from './emp1.png';
import MyAppBar from './assign';
import Footer from './footer';
const HomePage = () => {
  return (
    <div>
    <MyAppBar/>
    <div className="Boxx">
    <div className="i1"><img src={emp1} alt=''/></div>
    <div className="i2"><img src={emp} alt=''/></div>
    <div>
      <center><h1>WELCOME TO<br/>THE<br/>HOME PAGE!</h1></center>
    </div>
    </div>
       <div className="cl">
       <Footer/>
       </div>
    </div>
  );
};

export default HomePage;
