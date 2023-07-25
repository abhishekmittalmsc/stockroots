import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Avatar from "@mui/material/Avatar";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import MyVideos from './MyVideos';
import AllCourses from './AllCourses';
import MyCart from './MyCart';
import axios from 'axios';

const drawerWidth = 240;

export default function Dashboard() {
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState('MyVideos');
  const [userData, setUserData]=useState({});

useEffect(()=>{
  userDetails()
  console.log(userData, "user data")
},[])

const userDetails = async () => {
  const token = localStorage.getItem('token');

  try {
    const response = await axios.post("http://localhost:5000/api/userDetails", { token });
    const data = response.data;
    await setUserData(data);
    console.log('user data', data)
  } catch (error) {
    // Handle error
    console.log(error);
  }
};

  const listItemClicked = (text) => {
    setSelectedItem(text);
    if(text==='Logout'){
      localStorage.removeItem('token')
      window.location.href='/';

    }
    
  };


  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      > */}
        {/* <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Welcome Mr.{userData.displayName}
          </Typography>
        </Toolbar> */}
      {/* </AppBar> */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Toolbar /> */}
        <div style={{ display: "flex", alignItems: "center" }}>
      {/* Round profile image */}
      <Avatar src={userData.photoURL} alt="Profile Image" sx={{ width: 60, height: 60, margin:'10px' }} />

      {/* Name in two lines */}
      <div style={{ marginLeft: 16 }}>
        <Typography variant="h6" noWrap component="div" gutterBottom>
          {userData.displayName}
        </Typography>
        
      </div>
    </div>
        <Divider />
        <List>
          {['MyVideos', 'AllCourses', 'MyCart', 'Drafts', 'Logout'].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => listItemClicked(text)}
              selected={selectedItem === text}
            >
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* Conditional rendering of the MyVideos component */}
        {selectedItem === 'MyVideos' && <MyVideos />}
        {selectedItem === 'AllCourses' && <AllCourses />}
        {selectedItem === 'MyCart' && <MyCart userData={userData}/>}
      </Box>
    </Box>
  );
}
