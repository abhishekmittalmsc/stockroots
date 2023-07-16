import React from 'react';
import { Typography, Box, Container, Grid } from '@mui/material';
import FeatureCard from './FeatureCard'; // import the component for feature cards

const FeaturesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main', textDecoration: 'underline' }}>
          Features
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 2 }}>
          Subheading
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {[...Array(9)].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <FeatureCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturesPage;
