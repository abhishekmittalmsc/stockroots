import React, { useState } from "react";
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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../firebase.config";
import { Google } from "@mui/icons-material";
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import axios from "axios";
import OtpDialog from "./OtpDialog";
import Login from './Login';

const Register = ({ open, setOpen }) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobileNumber, setMobileNumber] = React.useState("");
  const [verified, setVerified] = useState(false);
  const [loginScreen, setLoginScreen]=useState(false);
  const [loginMobileNumber, setLoginMobileNumber]=useState("");
  const [failed, setFailed] = useState(false);
  const [termsChecked, setTermsChecked] = React.useState(false);
  const [errors, setErrors] = React.useState({
    name: "",
    email: "",
    mobileNumber: "",
    terms: "",
  });

  function handleOnChangeMobileNumber() {
    setMobileNumber("");
    // inputRef.current.focus();
  }
  function handleVerificationSuccess() {
    setVerified(true);
    setFailed(false);
  }
  function handleVerificationFailed() {
    console.log("failed called");
    setFailed(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  // Initialize Firebase app
  initializeApp(firebaseConfig);

  // Initialize Firebase authentication service
  const auth = getAuth();

  // Initialize social login providers
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twitterProvider = new TwitterAuthProvider();

  const RegisterButton = styled(Button)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    textTransform: "none",
    padding: "8px 16px",
    marginRight: theme.spacing(2),
  }));

  const handleRegister = async () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      mobileNumber: "",
      terms: "",
    };

    if (name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }
    if (verified === false) {
      valid = false;
    }
    if (mobileNumber.trim() === "") {
      newErrors.mobileNumber = "Mobile Number is required";
      valid = false;
    }
    if (!termsChecked) {
      newErrors.terms = "Please accept the terms and conditions";
      valid = false;
    }

    if (valid) {
      newErrors.email = "";
      try {
        await axios
          .post("http://localhost:5000/api/save-user-details", {
            uid: "Manual Registration",
            displayName: name,
            email: email,
            phoneNumber: mobileNumber,
          })
          .then((res) => {
            console.log("response is", res);
          });
      } catch (error) {
        // Handle error
        console.error(error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const SocialButton = ({ provider, title }) => {
     const handleSocialLogin = async () => {
      try {
        let selectedProvider;

        switch (provider) {
          case "google":
            selectedProvider = googleProvider;
            break;
            case "mobile":
              setLoginScreen(true)
            break;
            case "Register":
              setLoginScreen(false)
            break;

       
        }

        if (selectedProvider) {
          const result = await signInWithPopup(auth, selectedProvider);
          const user = result.user;
          await axios
            .post("http://localhost:5000/api/save-user-details", {
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
              photoURL: user.photoURL,
            })
            .then((res) => {
              console.log("response is", res);
              window.location.href='/dashboard';
              localStorage.setItem('token', res.data.token);
            });
        }
      } catch (error) {
        // Handle error
        console.error(error);
      }
    };

    let icon;
    let color;

    switch (provider) {
      case "google":
        icon = <Google />;
        color = "#db4a39";
        break;
        case "mobile":
          icon = <MobileScreenShareIcon />;
          // color = "yellow";
          break;
          case "Register":
            icon = <HowToRegIcon />;
            // color = "red";
            break;
       
    }

    return (
      <RegisterButton
        variant="contained"
        style={{ backgroundColor: color }}
        startIcon={icon}
        onClick={handleSocialLogin}
      >
        {title}
      </RegisterButton>
    );
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        style: {
          height: loginScreen===false?"50vh":"40vh",
          width: "25vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: "10px",
          overflow: "hidden", // Prevents scrollbars
        },
      }}
    >
    
      <DialogContent
        sx={{
          overflow: "hidden", // Prevents scrollbars
          flexGrow: 1, // Fill available space
        }}
      >
        <Box display="flex" justifyContent="center" mb={2}>
          <SocialButton provider="google" title="Continue With Google" />
          {
          loginScreen?
          <SocialButton provider="Register" title="New Registeration" />
          :
          <SocialButton provider="mobile" title="Login With Mobile" />
          
          }
          

        </Box>

        {loginScreen===false?
        
        <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography
          variant="body2"
          sx={{
            mt: "auto",
            mb: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p style={{ margin: "0" }}>or Register</p>
        </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            sx={{ width: "80%", marginBottom: "35px", height: "25px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={errors.name !== ""}
            helperText={<span className="error-message">{errors.name}</span>}
          />

          <TextField
            label="Email"
            fullWidth
            margin="normal"
            sx={{ width: "80%", marginBottom: "35px", height: "25px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email !== ""}
            helperText={<span className="error-message">{errors.email}</span>}
          />
          <TextField
            label="Mobile Number"
            fullWidth
            margin="normal"
            sx={{ width: "80%", marginBottom: "40px", height: "25px" }}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            error={errors.mobileNumber !== ""}
            helperText={
              <span className="error-message">{errors.mobileNumber}</span>
            }
          />
          {mobileNumber.length === 10 && (
            <OtpDialog
              phoneNumber={mobileNumber}
              onVerificationSuccess={handleVerificationSuccess}
              onVerificationFailed={handleVerificationFailed}
              onChangeMobileNumber={handleOnChangeMobileNumber}
            />
          )}

          <div id="recaptcha-container" />

          <FormControlLabel
            label={
              <Typography variant="body2" sx={{ color: "#00008B" }}>
                I agree to the{" "}
                <Link href="#" color="inherit">
                  terms and conditions
                </Link>
              </Typography>
            }
            control={
              <Checkbox sx={{ color: errors.terms ? "red" : "#00008B" }} />
            }
            error={errors.terms !== ""}
            helperText={<span className="error-message">{errors.terms}</span>}
            checked={termsChecked}
            onChange={(e) => setTermsChecked(e.target.checked)}
          />

          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2, color: "#fff", bgcolor: "#00008B", width: "80%" }}
            onClick={handleRegister}
            disabled={verified === false || termsChecked === false}
          >
            Register
          </Button>
          </Box>
          :
          <Login/>
}


          
        
      </DialogContent>
    </Dialog>
  );
};

export default Register;
