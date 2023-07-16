import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import CardComponent from './Card'

const courses = [
  {
    id: 1,
    imageSrc: 'https://dummyimage.com/400x400/000/fff',
    title: 'Course 1',
    rating: 4.5,
    numRatings: 1234,
    author: 'Author 1',
    price: '$19.99',
  },
  {
    id: 2,
    imageSrc: 'https://dummyimage.com/400x400/000/fff',
    title: 'Course 2',
    rating: 4.7,
    numRatings: 5678,
    author: 'Author 2',
    price: '$29.99',
  },
  {
    id: 3,
    imageSrc: 'https://dummyimage.com/400x400/000/fff',
    title: 'Course 3',
    rating: 4.9,
    numRatings: 91011,
    author: 'Author 3',
    price: '$39.99',
  },
  {
    id: 4,
    imageSrc: 'https://dummyimage.com/400x400/000/fff',
    title: 'Course 4',
    rating: 4.2,
    numRatings: 1213,
    author: 'Author 4',
    price: '$49.99',
  },
];

const HomePage = () => {
  return (
    <Box sx={{ m: '40px' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h4" sx={{ color: '#1A237E', textDecoration: 'underline' }}>
          Stockroots Courses
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: '50%' }}>
          View More
        </Button>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', mt: '40px' }}>
        {courses.map((course) => (
          <CardComponent key={course.id} course={course} />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
