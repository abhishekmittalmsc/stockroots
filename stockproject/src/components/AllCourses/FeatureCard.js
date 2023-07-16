import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: 400,
    width: 350,
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: '10px',
    overflow: 'hidden',
  },
  logo: {
    height: '60%',
    width: '40%',
    margin: 'auto 0',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: '16px',
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: '8px',
  },
  description: {
    fontSize: '0.9rem',
    lineHeight: '1.5',
  },
});

const FeatureCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img
        className={classes.logo}
        src="https://dummyimage.com/300x240/000/fff"
        alt="Logo"
      />
      <CardContent className={classes.content}>
        <Typography className={classes.title} variant="h5" component="h2">
          Feature Title
        </Typography>
        <Typography className={classes.description} variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non mi nec libero suscipit ullamcorper. Mauris in velit id massa sagittis laoreet. Duis sit amet erat sagittis, fringilla lectus a, vestibulum urna. Ut in nisi eu mauris volutpat malesuada. Nulla facilisi. Aenean eu justo vitae est commodo vestibulum. Suspendisse scelerisque sagittis justo, eget placerat dolor consequat sed.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
