import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import axios from "axios";


const AllCourses = () => {
  const [courseData, setCourseData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [userData, setUserData]=useState({});


  
  useEffect(() => {
    fetchCourses();
    userDetails()

  }, []);

  
  const userDetails = async () => {
    const token = localStorage.getItem('token');
  
    try {
      const response = await axios.post("http://localhost:5000/api/userDetails", { token });
      const data = response.data;
      await setUserData(data);
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };
  

  const fetchCourses = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/allCourses");
      const data = response.data;
      setCourseData(data);
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  const handleCardHover = (index, isHovered) => {
    setCourseData((prevCourseData) => {
      const updatedCourseData = [...prevCourseData];
      updatedCourseData[index].isHovered = isHovered;
      return updatedCourseData;
    });
  };

  const handleAddToCart = async (course) => {
    setSelectedCourse(course);
    try {
      const response = await axios.post("http://localhost:5000/api/addToCart",{course, userData});
      const data = response.data;
      if(data){
        setOpenDialog(true);
      }
      console.log('add to cart', data)
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  const handleGoToCart = () => {
    // Add logic to navigate to the cart page
    setOpenDialog(false);
    console.log("Navigating to cart page");
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      {courseData.map((course, index) => (
       <Card
       key={course._id}
       onMouseEnter={() => handleCardHover(index, true)}
       onMouseLeave={() => handleCardHover(index, false)}
       sx={{
         width: "32vh",
         boxShadow: "none",
         backgroundColor: "transparent",
         position: "relative",
         "&:hover": {
          
           "& $cardOverlay": {
             opacity: 1,
             pointerEvents: "auto",
           },
         },
       }}
     >
     
     <CardMedia
  component="img"
  image={course.coursePoster}
  alt={course.courseName}
  sx={{
    height: "550px",
    transition: "opacity 0.3s",
    opacity: course.isHovered ? 0.2 : 1,
  }}
/>

<div
  className="card-overlay"
  style={{
    opacity: course.isHovered ? 1 : 0,
    pointerEvents: course.isHovered ? "auto" : "none",
    transition: "opacity 0.3s",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <IconButton
    onClick={() => handleAddToCart(course)}
    style={{
      color: "red",
      backgroundColor: "yellow",
    }}
  >
    <AddShoppingCartIcon />
  </IconButton>
  <span style={{ color: "red", marginTop: "8px",backgroundColor: "yellow", }}>Add to Cart</span>
</div>


{course.isHovered && (
  <div
    style={{
      position: "absolute",
      bottom: "16px",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      opacity: selectedCourse === course ? 1 : 0,
      transition: "opacity 0.3s",
    }}
  >
  </div>
)}

        </Card>
      ))}
      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Course Added to Cart</DialogTitle>
        <DialogContent>
          <p>The course has been added to your cart.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleGoToCart}>Go to Cart</Button>
          <Button onClick={handleDialogClose}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AllCourses;
