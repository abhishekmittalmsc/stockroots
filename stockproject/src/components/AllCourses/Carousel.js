import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import {Cor1, Cor2, Cor3} from '../../components/ImageURLs';


const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    height: "65vh",
    width: "100%",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: "40vh",
    },
  },
  imageWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "300%",
    display: "flex",
    flexDirection: "row",
    transition: "transform 0.5s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      width: "400%",
    },
  },
  image: {
    height: "100%",
    width: `${100 / images.length}%`, // Updated width calculation
    backgroundSize: "contain", // Updated background-size property
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    [theme.breakpoints.down("sm")]: {
      width: `${100 / (images.length * 4)}%`, // Updated width calculation for small screens
    },
  },
  buttonWrapper: {
    position: "absolute",
    bottom: theme.spacing(2),
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
  },
  dot: {
    height: theme.spacing(1.5),
    width: theme.spacing(1.5),
    borderRadius: "50%",
    backgroundColor: theme.palette.grey[400],
    margin: theme.spacing(0, 1),
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    "&.active": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const images = [Cor1, Cor2, Cor3];

const Carousel = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const renderImages = () =>
    images.map((image, index) => (
      <div
        key={index}
        className={classes.image}
        style={{ backgroundImage: `url(${image})` }}
      />
    ));

  const renderDots = () =>
    images.map((image, index) => (
      <div
        key={index}
        className={`${classes.dot} ${activeIndex === index && "active"}`}
        onClick={() => handleDotClick(index)}
      />
    ));

  return (
    <Box className={classes.root}>
      <Box
        className={classes.imageWrapper}
        style={{
          transform: `translateX(-${(activeIndex * 100) / images.length}%)`,
        }} // Updated transform calculation
      >
        {renderImages()}
      </Box>
      <Box className={classes.buttonWrapper}>{renderDots()}</Box>
    </Box>
  );
};

export default Carousel;
