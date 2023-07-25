import React, {useState} from 'react';
import Navbar from './../HomePage/Navbar';
import {L0,L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12,L13,L14,L15,L16, Button1,Button2,Button3,Button4,Button5,Button6,Button7,Button9,Button10,Button11,Button12, Button8,Button13} from '../../components/ImageURLs'
import Accord from './Accord';
import WebinarForm from './LendingForm';

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
    top: '53%',
    left: '74.6%',
    transform: 'translate(-50%, -50%)',
    width: '41.5%',
    height: '68%',
  },
};


const Lending = () => {

  const images = [L0,Button11, L1,Button10, L2, L3,Button6, L4,Button9, L5,Button8, L6,Button5, L7, L8, L9,Button12, L10,Button7,L13,Button13,L14,Button13, L11, L15, Button10, L16];


  const [isWebinarFormOpen, setIsWebinarFormOpen] = useState(false);

  // Step 2: Define a function to open the WebinarForm dialog when a button is clicked
  const handleWebinarFormOpen = () => {
    setIsWebinarFormOpen(true);
  };

  // Step 3: Define a function to close the WebinarForm dialog
  const handleWebinarFormClose = () => {
    setIsWebinarFormOpen(false);
  };

  
  return (
    <div style={styles.container}>
      <Navbar />
      {images.map((image, index) => (
        <div key={index} style={styles.imageContainer}>
        <div style={styles.imageWrapper}>
          <img src={image} alt={`Image ${index + 1}`} style={styles.image} 
          onClick={image===Button11 || Button1 || Button10|| Button12|| Button2|| Button3|| Button4|| Button5|| Button6|| Button7|| Button9 || Button8||Button13? handleWebinarFormOpen:null}
          
          
          />
          {index === 2 && (
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
        {isWebinarFormOpen && (
        <WebinarForm handleClose={handleWebinarFormClose} />
      )}

      </div>
      
      ))}
      <Accord />
      <img src={Button11} />

    </div>
  );
};

export default Lending;
