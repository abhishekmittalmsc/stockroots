import React from 'react';
import Navbar from '../HomePage/Navbar';
import Carousel from './Carousel';
import {C4,C5,C6,C7,C8,C9,C10,C11,C12,C13,C14,C15,C16,C17} from '../../components/ImageURLs'

const styles = {
  container: {
    width: '100%',
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', // If you want to center vertically in the viewport
  },

  imageContainer: {
    width: '40rem',
    display:'inline-block',
  },


  carouselContainer: {
    width: '150rem',
    height:'50rem'
    // margin: '0 auto',
    // height: '65vh',
    
    
  },
  // imageRow: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   justifyContent: 'center',
  //   marginTop: '20px',
  // },
  
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
  image2: {
    width: '70%',
    height: '100%',
    objectFit: 'cover',
    marginBottom: '20px',
  },
};
styles.image2["@media (max-width: 767px)"] = {
  width: '100%',    /* Styles for small screens */
};

styles.image2["@media (min-width: 768px) and (max-width: 1199px)"] = {
  width: '100%',    /* Styles for medium screens */
};


const AllCourses = () => {
  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.carouselContainer}>
        <Carousel />
      </div>

      {/* <div style={styles.imageRow}> */}
        <div style={styles.imageContainer}>
          <img src={C4} alt="Image 1" style={styles.image} />
        </div>
        
        <div style={styles.imageContainer}>
          <img src={C5} alt="Image 2" style={styles.image} />
        </div>

        <div style={styles.imageContainer}>
          <img src={C6} alt="Image 3" style={styles.image} />
        </div>

        <div style={styles.imageContainer}>
          <img src={C7} alt="Image 4" style={styles.image} />
        </div>

        {/* <div style={styles.imageRow}> */}
        <div style={styles.imageContainer}>
          <img src={C8} alt="Image 5" style={styles.image} />
        </div>

        <div style={styles.imageContainer}>
          <img src={C9} alt="Image 6" style={styles.image} />
        </div>

        <div style={styles.imageContainer}>
          <img src={C10} alt="Image 7" style={styles.image} />
        </div>

        <div style={styles.imageContainer}>
          <img src={C11} alt="Image 8" style={styles.image} />
        </div>
        {/* </div> */}

        {/* <div style={styles.imageRow}> */}
        <div style={styles.imageContainer}>
          <img src={C12} alt="Image 9" style={styles.image} />
        </div>
        
        <div style={styles.imageContainer}>
          <img src={C13} alt="Image 10" style={styles.image} />
        </div>

        <div style={styles.imageContainer}>
          <img src={C14} alt="Image 11" style={styles.image} />
        </div>

        <div style={styles.imageContainer}>
          <img src={C15} alt="Image 12" style={styles.image} />
        </div>
        {/* </div> */}
        <img src={C16} style={styles.image2} />
        <img src={C17} style={styles.image2} />

        {/* </div> */}
    </div>
  );
};

export default AllCourses;
