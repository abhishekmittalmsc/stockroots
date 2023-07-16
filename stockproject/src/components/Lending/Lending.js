import React from 'react';
import Navbar from './../HomePage/Navbar';
import {L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12} from '../../components/ImageURLs'
import Accord from './Accord';

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

const Lending = () => {
  const images = [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12];

  return (
    <div style={styles.container}>
      <Navbar />
      {images.map((image, index) => (
        <div key={index} style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
          <img src={image} alt={`Image ${index + 1}`} style={styles.image} />
          {index === 0 && (
           <iframe
           title="YouTube Video"
           width="100%"
           height="100%"
           src="https://www.youtube.com/embed/zFeet07QdiU"
           frameBorder="0"
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
           style={styles.video}
         />
          )}
        </div>
      </div>
      
      ))}
      <Accord />
    </div>
  );
};

export default Lending;
