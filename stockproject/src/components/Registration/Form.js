// import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import IconButton from '@mui/material/IconButton';
// import { Typography, Checkbox, FormControlLabel, Link, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import axios from 'axios';
// import InputAdornment from '@mui/material/InputAdornment';
// import OtpDialog from './OtpDialog'
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import { useRef } from 'react';

// axios.defaults.baseURL = 'https://stockproject-be.onrender.com';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     display: 'flex',
//     height: '75vh',
//   },
//   formContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '50%',
//     padding: theme.spacing(4),
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageContainer: {
//     borderRadius: '10px',
//     padding: theme.spacing(2),
//     width: '50%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundImage: 'url(https://source.unsplash.com/1600x900/?motivation,money)',
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//   },
//   form: {
//     width: '80%',
//     padding: '0px'
//   },
//   submitButton: {
//     padding: '16px',

//   },
// }));

// function FormComponent() {
//   const classes = useStyles();
//   const inputRef = useRef();

//   const [open, setOpen] = useState(false);
//   const [pin, setPin] = useState("");
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [country, setCountry] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [verified, setVerified] = useState(false);
//   const [failed, setFailed] = useState(false);
//   const [Name, setName] = useState("");
//   const [mailId, setMailId] = useState("");
//   const [termsOfService, setTermsOfService] = useState(false);
//   const[mailError,setMailError]=useState(false);

//   function handleOnChangeMobileNumber(){
//     setPhoneNumber("");
//     inputRef.current.focus();
//   }
//   function handleVerificationSuccess(){
//     setVerified(true);
//     setFailed(false)
//   }
//   function handleVerificationFailed(){
//     console.log('failed called')
//     setFailed(true);
//   }
//   function handleEmailBlur(event) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(mailId)) {
//     setMailError(true)  
//     event.target.focus();
//     }else{
//       setMailError(false);
//     }
//   }



//   function handlePinUpdate(event) {
//     const value = event.target.value;

//     setPin(value);

//     // Call your function if the length is 6
//     if (value.length === 6) {
//       console.log('value', value)
//       axios.get(`https://api.postalpincode.in/pincode/${value}`)
//         .then(response => {
          
//           setCity(response.data[0].PostOffice[0].Division);
//                   })
//         .catch(error => {
//           setCity("Unknown");
//           setState("Unknown");
//           setCountry("Unknown");
//           // setData(null);
//         });
//     }


//   }

//   const handleButtonClick = (event) => {
//     // Send data to backend using Axios
//     event.preventDefault()
//     const data={Name, pin, city, state, country, phoneNumber, mailId}
   
//     setOpen(true);
//     axios.post('/api/createUser', data)
//       .then(() => {
//         // Show dialog box on success
//         setOpen(true);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <div className={classes.root}>
//       <div className={classes.formContainer}>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>

//                 <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="Name"
//                 label="Name"
//                 name="Name"
//                 value={Name}
//                 onChange={(e)=>{setName(e.target.value)}}
//               />
//             </Grid>
//             <Grid item xs={12}>

//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="mailId"
//                 label="Mail-ID"
//                 name="mailId"
//                 value={mailId}
//                 onChange={(e)=>{setMailId(e.target.value)}}
//                 onBlur={handleEmailBlur}
//                 InputLabelProps={mailError?{
//                   style: {
//                     color: 'red',
//                   },
//                 }:null}
//                 InputProps={mailError?{
//                   style: {
//                     color: 'red',
//                   },
//                 }:null}              />
//               </Grid>
//               <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="mobileNumber"
//                 label="Mobile Number"
//                 name="mobileNumber"
//                 value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
//                 InputProps={{
//                   startAdornment: <InputAdornment position="start">+91</InputAdornment>,
//                   endAdornment: verified ? (
//                     <IconButton edge="end">
//                       <CheckCircleOutlineIcon color="primary" />
//                     </IconButton>
//                   ) :
//                     <OtpDialog phoneNumber={phoneNumber} onVerificationSuccess={handleVerificationSuccess}
//                     onVerificationFailed={handleVerificationFailed}
//                     onChangeMobileNumber={handleOnChangeMobileNumber}
//                     />  
                     
//                 }}
//                 ref={inputRef} 
//               />
//             </Grid>
//             {/* <Grid item xs={4}>
              
                          
//               </Grid> */}

            
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 id="pincode"
//                 label="Area Pin Code"
//                 name="pincode"
//                 onChange={handlePinUpdate}
//                 value={pin}
//               />
              
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
                
//                 required
//                 fullWidth
//                 id="cityName"
//                 label="City Name"
//                 name="cityName"
//                 value={city}
//                 onChange={pin.length!==6?(e)=>{setCity(e.target.value)}:null}
//               />
//             </Grid>
//             {/* <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 disabled
//                 fullWidth
//                 id="stateName"
//                 label="State Name"
//                 name="stateName"
//                 value={state}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <TextField
//                 variant="outlined"
//                 disabled
//                 fullWidth
//                 id="countryname"
//                 label="Country Name"
//                 name="countryName"
//                 value={country}
//               />
//             </Grid> */}
           
//           </Grid>
//           <div id='recaptcha-container'/>
//           {failed?<h5 style={{"color":"red", "margin":"0px"}}>OTP Verification Failed, please retry!!!</h5>:null}
//           <FormControlLabel
//             control={
//               <Checkbox
//                 name="termsOfService"
//                 color="primary"
//                 checked={termsOfService}
//                 onChange={(e)=>{setTermsOfService(e.target.checked)}}
//               />
//             }
//             label={
//               <span variant="outlined">
//                 I agree to all statements in the&nbsp;
//                 <Link href="/path/to/terms-of-service.pdf" download>
//                   Terms of Service
//                 </Link>
//               </span>
//             }
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             style={{ "margin": "8px" }}
//             className={classes.submitButton}
//             onClick={handleButtonClick}
//             disabled={
//               !termsOfService ||
//               !verified
//             }
//           >
//             Submit
//           </Button>

//           <Button
//             type="reset"
//             fullWidth
//             variant="outlined"
//             style={{ "margin": "8px" }}
//             className={classes.submitButton}
//           >
//             Reset
//           </Button>
//         </form>
//         <Dialog open={open} onClose={handleClose}>
//           <DialogTitle style={{ background: `linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)`, color: '#fff', fontSize: '1.5rem' }}>Details Saved!!!</DialogTitle>
//           <DialogContent>
//             Thanks for updating your details, our Executive will contact you on the given number within 48 hours.
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose}
//               variant='contained'
//             >
//               Close
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//       <div className={classes.imageContainer}></div>
//     </div>
//   );
// }

// export default FormComponent;