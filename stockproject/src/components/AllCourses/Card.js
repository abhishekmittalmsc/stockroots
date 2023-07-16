import React, { useState } from 'react'
import { Card, CardHeader, CardMedia, CardContent, Typography, Avatar, IconButton, Rating } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ProductCard = () => {
  return (
    <Card sx={{ maxWidth: 300, maxHeight:450}}>
      
      <CardMedia
        component="img"
        height="200"
        image="https://dummyimage.com/200x160/000/fff"
        alt="Product Image"
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title="Product Title"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <Rating name="read-only" value={3} readOnly /> (10)
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          $9.99
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
