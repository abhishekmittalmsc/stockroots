import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NirmalBang } from '../ImageURLs';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { makeStyles } from '@mui/styles';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem',
};

const formFieldStyle = {
  marginBottom: '1rem',
};

const useStyles = makeStyles((theme) => ({
  alert: {
    backgroundColor: 'blue', // Change the background color here
    color: 'red', // Change the text color here
    fontSize: '1.5rem', // Change the font size here
    width: '100%', // Change the width here if needed
    textAlign: 'center', // Center the text
    borderRadius: 0, // Change the border radius here if needed
  },
}));

const Footer = () => {
  const navigate = useNavigate();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile:''
  });

  
  const handleLogoClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiUrl="http://localhost:5000/api/NirmalForm"
    axios
      .post(apiUrl, formData)
      .then((response) => {
        setSnackbarOpen(true);
        setFormData({
            name: '',
            email: '',
            mobile:''
        })
        // Handle any additional logic or feedback to the user upon successful submission
      })
      .catch((error) => {
        console.error('Error sending form data:', error);
        // Handle any error or provide feedback to the user in case of an error
      });

    handleCloseForm();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const classes = useStyles();


  return (
    <footer style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ marginBottom: '1rem' }}>
        <img src={NirmalBang} alt="Logo" style={{ width: '80rem', height: '18rem', cursor: 'pointer' }} onClick={handleLogoClick}></img>
      </div>
      <Dialog open={showForm} onClose={handleCloseForm} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit} style={formStyle}>
          <DialogTitle id="form-dialog-title" style={{ textAlign: 'center' }}>
            Enter your information
          </DialogTitle>
          <DialogContent>
            <div style={formFieldStyle}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div style={formFieldStyle}>
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Your Mobile Number"
                required
              />
            </div>
            <div style={formFieldStyle}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
              />
            </div>
            {/* Add other form fields if needed */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </DialogActions>
        </form>
      </Dialog>
      <nav>
        <ul style={footerListStyle}>
        <li >
            <button onClick={() => navigate('/aboutUs')} >
            Copyright@2023
            </button>
          </li>
          <li >
            <button onClick={() => navigate('/aboutUs')} >
              About Us
            </button>
          </li>
          <li >
            <button onClick={() => navigate('/refundPolicies')} >
              Refund Policies
            </button>
          </li>
          <li >
            <button onClick={() => navigate('/termsAndConditions')}>
              T&C
            </button>
          </li>
          <li >
            <button onClick={() => navigate('/privatePolicies')}>
              Private Policies
            </button>
          </li>
        </ul>

      </nav>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <MuiAlert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }} className={classes.alert}>
          Your details have been submitted! Our team will contact you soon.
        </MuiAlert>
      </Snackbar>
    </footer>
  );
};

const footerListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
  
};



// ... your other styles ...

export default Footer;
