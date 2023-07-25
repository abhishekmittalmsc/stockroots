import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import VideoContainer from './VideoContainer';
import axios from 'axios';

const MyCard = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [myCourses, setMyCourses]=useState("");
  const [currentCourse, setCurrentCourse]=useState("");
  // Calculate the height and width dynamically based on the screen size
  const cardHeight = `${window.innerHeight * 0.4}px`;
  const cardWidth = `${window.innerWidth * 0.2}px`;

  const handlePlayClick = (selectedCourse) => {
    console.log('handle play click', selectedCourse)
    setOpenDialog(true);
    setCurrentCourse(selectedCourse)
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    fetchCourseData();
  }, []);
  


  const fetchCourseData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("http://localhost:5000/api/courseData", {
        token,
      });
      const data = response.data;
      console.log('data of courses', data)
      setMyCourses(data.courses);
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };


  return (
    <>
      {
        myCourses && myCourses.map((courses)=>{
          return(
            
            <Card
        sx={{
          height: cardHeight,
          width: cardWidth,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ position: 'relative', height: '80%' }}>
          <CardMedia
            component="img"
            sx={{ height: '100%' }}
            image={courses.coursePoster}
            alt="Card Image"
          />
          <IconButton
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            aria-label="play"
            onClick={()=>{handlePlayClick(courses)}}
          >
            <PlayCircleOutlineIcon fontSize="large" />
          </IconButton>
        </div>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="div">
            {courses.courseName}
          </Typography>
        </CardContent>
      </Card>
          )
        })
      }
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="lg">
        <DialogTitle>Video Player</DialogTitle>
        <DialogContent>
          <VideoContainer currentCourse={currentCourse} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant="contained" color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MyCard;
