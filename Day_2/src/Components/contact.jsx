import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MyAppBar from './assign';
import Footer from './footer';

const Contact = () => {
  const [question, setQuestion] = useState('');

  const handleQuestionSubmit = () => {
    console.log(`Question submitted: ${question}`);
    setQuestion(''); 
  };

  return (
    <div>
      <MyAppBar />
      <Box className="about-container">
        <Typography variant="h4" className="about-heading">
          CONTACT US
        </Typography>
        <div className="about-content1">
          <br /><br /><br />
          <div className="contact-content">
            <Typography variant="body1">
              Have questions or inquiries? Feel free to reach out to us. Our dedicated support team is here to assist you.
            </Typography>
            <Typography variant="body1">
              For general inquiries, please contact us via email or phone:
            </Typography>
            <Typography variant="body1">
              Email: contact@example.com
            </Typography>
            <Typography variant="body1">
              Phone: 123-456-7890
            </Typography>
            <br/>
            <TextField
              label="Your Question"
              variant="outlined"
              fullWidth
              margin="normal"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleQuestionSubmit}>
              Submit Question
            </Button>
          </div>
        </div>
      </Box>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
