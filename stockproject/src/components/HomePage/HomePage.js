import React, { Component } from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';
import {ObjectiveImg,ProfitableImg,SmartImg,AboutLeftImg,AboutRightImg,TestimoniesImg,JoinUsImg,Contactus,ContactusDet} from "../../components/ImageURLs";
import Form from './Form';
// import Button1Img from '../../images/Button1.png'

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
  image: {
    width: '70%',
    height: 'auto',
    marginBottom: '20px',
  },
  aboutContainer: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
  aboutImage: {
    width: 'calc(50% - 10px)', // Adjust the gap between images as needed
    height: 'auto',
  },
  mainContainer: {
    display: 'flex',
    width: '80%',
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
    padding: '0px',
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
  return (
    <div style={styles.container}>
      <Navbar />
      <Carousel />
      <img src={ObjectiveImg} style={styles.image} />
      {/* <img src={Button1Img} style={styles.image} /> */}

      <img src={ProfitableImg} style={styles.image} />
      <img src={SmartImg} style={styles.image} />
      <div style={styles.aboutContainer}>
        <img src={AboutLeftImg} alt="Image 1" style={styles.aboutImage} />
        <img src={AboutRightImg} alt="Image 2" style={styles.aboutImage} />
      </div>
      <img src={TestimoniesImg} style={styles.image} />
      <img src={JoinUsImg} style={styles.image} />
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
    </div>
  );
};

export default HomePage;
