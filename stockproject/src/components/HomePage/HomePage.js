import React, {useState} from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import {ObjectiveImg,ProfitableImg,SmartImg,AboutLeftImg,TestimoniesImg,JoinUsImg,Contactus,ContactusDet, Button11,Button6,Button7,Button10,Button12} from "../../components/ImageURLs";
import Form from './Form';
import WebinarForm from '../Lending/LendingForm';

const styles = {
  container: {
    width: '100vw',
    // overflowX: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
     },
  image: {
    width: '80%',
    height: 'auto',
    marginBottom: '2rem',
  },
  
  
  mainContainer: {
    display: 'flex',
    width: '80vw',
    height: '80vh',
    margin: '0 auto',
  },
  formContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
  },
  formContent: {
    width: '70%',
    padding: '0rem',
    height:'100%'
  },
  imageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagecon: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
};

const HomePage = () => {

  const [isWebinarFormOpen, setIsWebinarFormOpen] = useState(false);

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
      <Carousel />
      <img src={Button6} style={styles.image} onClick={handleWebinarFormOpen}/>

      <img src={ObjectiveImg} style={styles.image} />
      {/* <img src={Button1Img} style={styles.image} /> */}

      <img src={ProfitableImg} style={styles.image} />
      {/* <img src={Button7} style={styles.image} /> */}

      <img src={SmartImg} style={styles.image} />
      <img src={AboutLeftImg} style={styles.image} />
      <img src={Button12} style={styles.image} onClick={handleWebinarFormOpen}/>

      {/* <div style={styles.aboutContainer}>
        <img src={AboutLeftImg} alt="Image 1" style={styles.aboutImage} />
        <img src={AboutRightImg} alt="Image 2" style={styles.aboutImage} />
      </div>
       */}
      <img src={JoinUsImg} style={styles.image} />
      {/* <img src={Button10} style={styles.image} /> */}

      <img src={TestimoniesImg} style={styles.image} />
      <img src={Contactus} style={styles.image} />

      <div style={styles.mainContainer}>
      <div style={styles.formContainer}>
        <form style={styles.formContent}>
        <Form/>
          </form>
      </div>
      <div style={styles.imageContainer}>
        <img src={ContactusDet} alt="Contact Details" style={styles.imagecon} />
      </div>
    </div>
    <img src={Button11} style={styles.image} onClick={handleWebinarFormOpen}/>
 {isWebinarFormOpen && (
        <WebinarForm handleClose={handleWebinarFormClose} />
      )}
    </div>
  );
};

export default HomePage;
