import React, {useRef} from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const FormContainer = styled('div')(({ theme }) => ({
  backgroundColor: '#024949',
  borderRadius: '10px',
  padding: theme.spacing(2),
  margin: theme.spacing(2),
  width: '100%',
  height: '90%',
}));

const FormHeading = styled(Typography)({
  color: '#fff',
  marginBottom: '4px',
});

const SubHeading = styled(Typography)({
  color: '#fff',
  marginBottom: '10px',
});

const SubmitButton = styled(Button)({
  marginTop: '10px',
  height:'45px'
});

const ResetButton = styled(Button)({
  marginTop: '20px',
  height:'45px'
});

const Form = () => {
  const formRef = useRef(null);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };
  const handleReset = () => {
    formRef.current.reset();
  };

  return (
    <FormContainer>
      <FormHeading variant="h5">Having A Query?</FormHeading>
      <p style={{"color":"white"}}>Fill up the form with your query and we will get back to you</p>
      <form ref={formRef} onSubmit={handleSubmit}>
        <TextField InputLabelProps={{
            style: { fontSize: '14px', marginTop: '10px'},
          }}label="Your Name*" fullWidth InputProps={{ style: { backgroundColor: '#fff',height:"40px", marginTop:'15px'     }  }} /><br/><br/>
        <TextField InputLabelProps={{
            style: { fontSize: '14px',marginTop: '10px' },
          }}label="Your Email Address*" fullWidth InputProps={{ style: { backgroundColor: '#fff',height:"40px", marginTop:'15px'     } }} /><br/><br/>
        <TextField InputLabelProps={{
            style: { fontSize: '14px',marginTop: '10px' },
          }}label="Your Phone Number*" fullWidth InputProps={{ style: { backgroundColor: '#fff',height:"40px" , marginTop:'15px'    } }} /><br/><br/>
        <TextField InputLabelProps={{
            style: { fontSize: '14px', marginTop: '10px' },
          }}label="Your City*" fullWidth InputProps={{ style: { backgroundColor: '#fff',height:"40px" , marginTop:'15px'    } }} /><br/><br/>
        <TextField
          label="Your Query*"
          multiline
          InputLabelProps={{
            style: { fontSize: '14px' },
          }}
          rows={6}
          fullWidth
          margin="normal"
          size="small"
          InputProps={{ style: { backgroundColor: '#fff' } }}
        /><br/>
        
        <SubmitButton type="submit" variant="contained" color="info" fullWidth>
          Submit
        </SubmitButton>
        <ResetButton type="button" variant="contained" color="secondary" fullWidth onClick={handleReset}>
          Reset
        </ResetButton>
      </form>
    </FormContainer>
  );
};

export default Form;
