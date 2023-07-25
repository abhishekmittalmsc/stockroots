import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const styles = {
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
  },
  formInput: {
    marginBottom: '1rem',
  },
  formSelect: {
    minWidth: '200px',
    marginBottom: '1rem',
  },
  formActions: {
    justifyContent: 'center',
    marginBottom: '1rem',
  },
};

const WebinarForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your form submission logic or API call here
    console.log(formData);
    handleClose(); // Close the dialog after form submission
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <DialogTitle>Webinar Registration Form</DialogTitle>
        <DialogContent>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
            style={styles.formInput}
          />
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            fullWidth
            required
            style={styles.formInput}
          />
          <TextField
            label="Mobile Number"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            fullWidth
            required
            style={styles.formInput}
          />
          <FormControl fullWidth style={styles.formSelect}>
            <InputLabel>Date of Webinar</InputLabel>
            <Select
              value={formData.date}
              onChange={handleInputChange}
              name="date"
              required
            >
              <MenuItem value="2023-08-01">August 1, 2023</MenuItem>
              <MenuItem value="2023-08-15">August 15, 2023</MenuItem>
              <MenuItem value="2023-08-30">August 30, 2023</MenuItem>
              <MenuItem value="2023-09-15">September 15, 2023</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions style={styles.formActions}>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default WebinarForm;
