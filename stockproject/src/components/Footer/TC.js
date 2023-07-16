import React from 'react';
import Navbar from '../HomePage/Navbar';
import {TC1, TC2, TC3, TC4, TC5, TC6, TC7, TC8, TC9} from '../ImageURLs'

const styles = {
  container: {
    width: '100%',
    overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      alignItems: 'stretch',
    },
  },
  imageContainer: {
    position: 'relative',
    width: '70%',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  video: {
    position: 'absolute',
    top: '57.5%',
    left: '74.6%',
    transform: 'translate(-50%, -50%)',
    width: '41.5%',
    height: '68%',
  },
};

const TC = () => {
  const images = [TC1, TC2, TC3, TC4, TC5, TC6, TC7, TC8, TC9];

  return (
    <div style={styles.container}>
      <Navbar />
      {images.map((image, index) => (
        <div key={index} style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
          <img src={image} alt={`Image ${index + 1}`} style={styles.image} />
          
        </div>
      </div>
      
      ))}
    </div>
  );
};

export default TC;
