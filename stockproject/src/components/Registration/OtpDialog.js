// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import IconButton from '@mui/material/IconButton';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/firestore';
// import 'firebase/compat/auth';
// import { firebaseConfig } from '../../firebase.config';

// export default function FormDialog({ phoneNumber, onVerificationSuccess, onVerificationFailed, onChangeMobileNumber }) {
//   const [open, setOpen] = useState(false);
//   const [otpValue, setOtpValue] = useState("");
//   const [failed, setFailed] = useState(false);

//   useEffect(() => {
//     if (phoneNumber.length === 10) {
//       setOpen(true);
//       otpSent();
//     }
//   }, [phoneNumber]);

//   firebase.initializeApp(firebaseConfig);

//   function otpSent() {
//     // e.preventDefault();
//     const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
//       size: 'invisible',
//     });
//     const number = `+91${phoneNumber}`
//     console.log('recaptcha', recaptchaVerifier, number)
//     firebase.auth().signInWithPhoneNumber(number, recaptchaVerifier)
//       .then((confirmationResult) => {
//         const verifyButton = document.getElementById('verify-button');
//         verifyButton.addEventListener('click', () => {
//           const code = document.getElementById('otp-input').value; // Retrieve the OTP entered by the user
//           confirmationResult.confirm(code)
//             .then((result) => {
//               if (result.operationType === 'signIn') {
//                 onVerificationSuccess()
//                 handleClose()
//                 setFailed(false)
//               }
//               else {
//                 setFailed(true)
//                 onVerificationFailed()
//               }
//               console.log('result', result);
//               // User successfully verified the phone number
//               // TODO: navigate to next screen or perform other actions
//             })
//             .catch((error) => {
//               console.log('error', error);
//               setFailed(true)
//               onVerificationFailed()
//               // Handle error
//             });
//         });
//       })
//       .catch((error) => {
//         console.log('error', error);
//         // Handle error
//       });
//   }

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleChandMobileNumber = () => {
//     onChangeMobileNumber();
//     setOpen(false);
//   }

//   return (
//     <div>
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Verification</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             {`To verify given Mobile Number ${phoneNumber}, please enter the OTP here`}
//           </DialogContentText>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="otp-input"
//             label="OTP"
//             type="OTP"
//             fullWidth
//             variant="standard"
//             value={otpValue}
//             onChange={(e) => { setOtpValue(e.target.value) }}
//             InputProps={{
//               endAdornment: failed ? (
//                 <IconButton edge="end">
//                   <ErrorOutlineIcon color="error" />
//                 </IconButton>
//               ) : null
//             }}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleChandMobileNumber}>Change Mobile Number</Button>
//           <Button id='verify-button' disabled={otpValue.length !== 6}>Verify</Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
