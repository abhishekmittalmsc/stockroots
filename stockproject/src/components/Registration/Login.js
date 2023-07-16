import React, { useState, useEffect, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  Button,
  Box,
  TextField,
  DialogTitle,
  DialogActions,
  Checkbox,
  FormControlLabel,
  Typography,
  Link,
} from '@mui/material';
import { AccountCircle, Google, Facebook, Twitter } from '@mui/icons-material';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { firebaseConfig } from '../../firebase.config';
import axios from 'axios';
import OtpDialog from './OtpDialog';

firebase.initializeApp(firebaseConfig);

const Login = ({ open, setOpen }) => {
  const recaptchaContainerRef = useRef(null); // Create a ref for the recaptcha container
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const [verificationId, setVerificationId] = useState(null);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const [registerScreen, setRegisterScreen] = useState(false);
  const [loginMobileNumber, setLoginMobileNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [showOtpField, setShowOtpField] = useState(false);
  const [failed, setFailed] = useState(false);
  const [newRegister, checkNewRegister] = useState(false);

  useEffect(() => {
    setRecaptchaVerifier(new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible',
    }));
    // ... other RecaptchaVerifier setup code
  }, []); // Run the effect only once, after component mount

  const handleClose = () => {
    setOpen(false);
  };

  function handleOnChangeMobileNumber(e) {
    const number = e.target.value;
    setLoginMobileNumber(number);

    if (number.length === 10) {
      setShowOtpField(true);
      otpSent(number)
      axios.post("http://localhost:5000/api/check-existing", {
        number:number
      })
      .then((res) => {
        if(res.data.Resp==="New"){
          checkNewRegister(true);
        }
      });
    }
    
     else {
      setShowOtpField(false);
    }
  }

  function otpSent(Num) {
    console.log('in otp sent 1', Num);
    const number = `+91${Num}`;

    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptchaVerifier)
      .then((confirmationResult) => {
        setVerificationId(confirmationResult.verificationId);
        console.log('in otp sent 2', confirmationResult);
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  const handleVerification = () => {
    const code = otp.join('');

    firebase
      .auth()
      .signInWithCredential(firebase.auth.PhoneAuthProvider.credential(verificationId, code))
      .then((result) => {
        console.log('result', result);
        if (result.operationType === 'signIn') {
          setFailed(false);

          try {
            axios
              .post("http://localhost:5000/api/mobile-login", {
                uid: "Mobile Registration",
                displayName: name,
                email: email,
                phoneNumber: loginMobileNumber,
              })
              .then((res) => {
                console.log("response is", res);
                window.location.href='/dashboard';
                localStorage.setItem('token', res.data.token);
                });
          } catch (error) {
            // Handle error
            console.error(error);
          }



          // window.location.href='/dashboard';

        } else {
          setFailed(true);
        }
      })
      .catch((error) => {
        console.log('error', error);
        setFailed(true);
      });
  };

  const handleInputChange = (index, value) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
  };

  const handleKeyDown = (index, e) => {
    // ... previous code
  };

  return (
   
    <Box display="flex" flexDirection="column" alignItems="center">
      {!showOtpField && (
        <TextField
          label="Registered Mobile Number"
          fullWidth
          margin="normal"
          sx={{ width: '80%', marginBottom: '40px', height: '25px' }}
          value={loginMobileNumber}
          onChange={handleOnChangeMobileNumber}
        />
      )}
      {showOtpField && (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    {newRegister && (
      <>
      <p>You are a New User, Please enter your Name, Email and OTP </p>
        <div style={{ marginBottom: '10px' }}>
          <TextField
            type="text"
            variant="outlined"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            inputProps={{
              style: {
                textAlign: 'center',
                width: '100%',
                height: '1rem',
              },
            }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <TextField
            type="text"
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            inputProps={{
              style: {
                textAlign: 'center',
                width: '100%',
                height: '1rem',
              },
            }}
          />
        </div>
      </>
    )}

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {otp.map((value, index) => (
        <div key={index} style={{ marginRight: '10px' }}>
          <TextField
            type="text"
            variant="outlined"
            id="otp-input"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: 'center',
                width: '1rem',
                height: '1rem',
              },
            }}
          />
        </div>
      ))}
    </div>
  </div>
)}

<div ref={recaptchaContainerRef} />

      <Box display="flex" flexDirection="column" alignItems="center">
        {/* TextField and other JSX code... */}
        <div id="recaptcha-container" /> {/* Make sure this element exists in your JSX */}

        {/* Button and other JSX code... */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, color: '#fff', bgcolor: '#00008B', width: '100%' }}
          id="verify-button"
          onClick={handleVerification}
          // disabled={verified === false || termsChecked === false}
        >
          {newRegister?"Register":"Login"}
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
