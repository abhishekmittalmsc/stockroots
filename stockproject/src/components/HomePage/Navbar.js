import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Register from "../Registration/Register";

const pages = [
  "AllCourses",
  "Lending",
  "About Us",
  "Contact Us",
  "Login",
  "Register",
];

function Navbar() {
  const [openRegister, setOpenRegister] = React.useState(false);
  const navigate = useNavigate();

  const appBarStyle = {
    backgroundColor: "#5699E3", // Replace with your desired color
  };

  const handleRegisterClick = () => {
    setOpenRegister(true);
  };
  const logoClick=()=>{
    navigate('/')
  }
  const handleNavMenuClick = (value) => {
    switch (value) {
      // case "Home":
      //      navigate('/');
      //   break;
      case "AllCourses":
        navigate("/allcourses");
        break;
      case "Lending":
        navigate("/lending");
        break;
      case "About Us":
        navigate("/aboutUs");
        break;
      case "Contact Us":
        navigate("/contactUs");
        break;
      case "Login":
        handleRegisterClick();
        break;
      case "Register":
        handleRegisterClick();
        break;
    }
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      {/* <Container maxWidth="xl"> */}
        <Toolbar disableGutters>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} style={{ width: "auto", height: "80px", marginLeft:'20px' }} alt="Logo"  onClick={logoClick}/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => { handleNavMenuClick(page) }}
                sx={{
                  fontSize: "20px",
                  fontFamily: "monospace",
                  fontWeight: 500,
                  // letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  marginLeft: index === 0 ? "150px" : "100px", // Adjust the margin here
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      {/* </Container> */}
      <Register open={openRegister} setOpen={setOpenRegister} />
    </AppBar>
  );
}
export default Navbar;
