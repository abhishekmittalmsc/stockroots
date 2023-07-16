import React, { useState, useEffect } from 'react';
import { ThemeProvider, makeStyles } from '@mui/styles'
import { createTheme } from '@mui/material'

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Registration/Register'
import Lending from './components/Lending/Lending'
import AllCourses from './components/AllCourses/AllCourses'
import Dashboard from './components/Dashboard/Dashboard'
import MyVideos from './components/Dashboard/MyVideos'
import VideoContainer from './components/Dashboard/VideoContainer'
import AboutUs from './components/Footer/AboutUs'
import RefundPolicies from './components/Footer/RefundPolicies'
import TC from './components/Footer/TC'
import PPolicy from './components/Footer/PPolicy'
import ContactUs from './components/Footer/ContactUs'
import Footer from './components/Footer/Footer'

const App = () => {
  const theme = createTheme();
  
  const isAuthenticated = () => {
    // Check if a valid token exists in localStorage
    const token = localStorage.getItem('token');
    console.log(token);
    // Return true if a valid token exists, false otherwise
    return !!token;
  };
  
  
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/registration" element={<Register/>} /> */}
          <Route path="/lending" element={<Lending/>}/>
          <Route path="/allcourses" element={<AllCourses/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
          <Route path="/refundPolicies" element={<RefundPolicies/>}/>
          <Route path="/termsAndConditions" element={<TC/>}/>
          <Route path="/privatePolicies" element={<PPolicy/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          
          
          <Route
        path="/dashboard"
        element={isAuthenticated() ? <Dashboard /> : <Navigate to="/" />}
      />          {/* <Route path="dashboard/MyVideos" element={<MyVideos/>}/>
          <Route path="dashboard/MyVideos/Video" element={<VideoContainer/>}/> */}

        </Routes>
        <Footer/>
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
