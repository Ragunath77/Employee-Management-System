import React from "react";
import MyAppBar from "./assign";
import Typography from '@mui/material/Typography';
import { Divider } from "@mui/material";
import Footer from "./footer";
import './assign.css';
const FAQs=()=>{
   return(
     <div>
     <MyAppBar/>
     <center>
     <br/><br/>
     <div className="Con">
     <Divider/>
     <br/>
     <Typography variant="h5">
     How do I add a new employee?
     </Typography>
     <br/>
     <Divider/>
     <br/>
     <Typography variant="h5">
     Can I update employee information?
     </Typography>
     <br/>
     <Divider/>
     <br/>
     <Typography variant="h5">
     How do I remove an employee from the system??
     </Typography>
     <br/>
     <Divider/>
     <br/>
     <Typography variant="h5">
     What is an employee management system, and how does it benefit organizations?
     </Typography>
     <br/>
     <Divider/>
     <br/>
     <Typography variant="h5">
     How secure is the employee management system in terms of data confidentiality and privacy?
     </Typography>
     <br/>
     <Divider/>
     <br/>
     </div>
     </center>
     <Footer/>
     </div>
   );
}
export default FAQs;