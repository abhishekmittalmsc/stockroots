import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  topContainer: {
    position: 'relative',
    top: '0',
    display: 'flex',
    justifyContent: 'center',
    zIndex: '999',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '20px',
    },
  },
  button: {
    height: '7vh',
    width: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4f4f',
    color: '#fff',
    fontSize: '28px',
    borderRadius: '15px',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
    animation: '$colorAnimation 2s linear infinite',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      fontSize: '20px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '90%',
      fontSize: '16px',
    },
  },
  '@keyframes colorAnimation': {
    '0%': {
      background: 'linear-gradient(to right, #ff4f4f, #4f4fff)',
    },
    '50%': {
      background: 'linear-gradient(to right, #4f4fff, #4fff4f)',
    },
    '100%': {
      background: 'linear-gradient(to right, #4fff4f, #ff4f4f)',
    },
  },
}));

const JoinButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.topContainer}>
      <div className={classes.button}>
        Join Our Workshop to Become a Profitable Trader/Investor
      </div>
    </div>
  );
};

export default JoinButton;
