import React, { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios'; // Import axios library for making HTTP requests

const FormContainer = styled('div')(({ theme }) => ({
  background:'linear-gradient(90deg, rgba(206,206,206,1) 0%, rgba(206,206,206,1) 35%, rgba(249,249,250,1) 100%)',
  borderRadius: '1rem',
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  width: '60rem',
  height: '67rem',
}));

const FormHeading = styled(Typography)({
  color: 'Black',
  marginBottom: '.4rem',
  fontWeight:'bold',
  fontSize:'3rem'
});

const SubmitButton = styled(Button)({
  marginTop: '2rem',
  height: '4.5rem',
  color:'white',
  fontSize:'2rem'
});

const ResetButton = styled(Button)({
  marginTop: '2rem',
  height: '4.5rem',
  color:'white',
  fontSize:'2rem'
});

const FormFieldWrapper = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const labelStyle = {
  fontSize: "1.8rem", // Adjust the font size as needed

};
const Form = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    query: '',
  });
  const [successMessage, setSuccessMessage] = useState('');


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send user data to the backend
      const response = await axios.post('http://localhost:5000/api/query', formData);
      setSuccessMessage('Data saved successfully!');
      handleReset()
      console.log('Response from the backend:', response.data);
    } catch (error) {
      // Handle error
      console.log('Error:', error);
    }
  };

  const handleReset = () => {
    formRef.current.reset();
    setFormData({
      name: '',
      email: '',
      phone: '',
      city: '',
      query: '',
    });
  };

  return (
    <FormContainer>
      <FormHeading variant="h5">Having A Query?</FormHeading>
      <p style={{ color: 'Black', fontSize:'2rem' }}>Fill up the form with your query, and we will get back to you</p>
      <form ref={formRef} >
        <FormFieldWrapper>
          <TextField
            label="Your Name*"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: 'white', }}  
            margin='dense'
            InputLabelProps={{
              style: labelStyle,
            }}
            inputProps={{
              style: {
                height: "4.5rem", // Adjust the height as needed
                padding: "0.5rem", // Optional: Adjust padding if needed
              },
            }}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <TextField
            label="Your Email Address*"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: 'white' }}
            InputLabelProps={{
              style: labelStyle,
            }}
            inputProps={{
              style: {
                height: "4.5rem", // Adjust the height as needed
                padding: "0.5rem", // Optional: Adjust padding if needed
              },
            }}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <TextField
            label="Your Phone Number*"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: 'white' }}
            InputLabelProps={{
              style: labelStyle,
            }}
            inputProps={{
              style: {
                height: "4.5rem", // Adjust the height as needed
                padding: "0.5rem", // Optional: Adjust padding if needed
              },
            }}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <TextField
            label="Your City*"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: 'white' }}
            InputLabelProps={{
              style: labelStyle,
            }}
            inputProps={{
              style: {
                height: "4.5rem", // Adjust the height as needed
                padding: "0.5rem", // Optional: Adjust padding if needed
              },
            }}
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <TextField
            label="Your Query*"
            name="query"
            multiline
            rows={5}
            value={formData.query}
            onChange={handleInputChange}
            fullWidth
            variant="outlined"
            style={{ backgroundColor: 'white' }}
            InputLabelProps={{
              style: labelStyle,
            }}
            inputProps={{
              style: {
                padding: "0.5rem", // Optional: Adjust padding if needed
              },
            }}
          />
        </FormFieldWrapper>
        {successMessage && <p style={{ color: 'yellow' }}>{successMessage}</p>}

        <SubmitButton type="submit" variant="contained" color="info" fullWidth onClick={handleSubmit}  sx={{
        backgroundColor: "#0033cc", // Change the background color to yellow
        "&:hover": {
          backgroundColor: "#0033cc", // Change the hover background color to yellow
        },
        
      }}>
          Submit
        </SubmitButton>
        <ResetButton type="button" variant="contained" fullWidth onClick={handleReset}  sx={{
        backgroundColor: "#ea6103", // Change the background color to yellow
        "&:hover": {
          backgroundColor: "#ea6103", // Change the hover background color to yellow
        },
       
      }} >
          Reset
        </ResetButton>
      </form>
    </FormContainer>
  );
};

export default Form;
