import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/Logo.png";
import Register from "../Registration/Register";
import OptionLogo from "../../images/Option_logo.png";


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
    // backgroundColor: "rgba(196, 82, 3, 0.7)", // Hex #c45203 with 70% transparency
    background:'none'    
  };

  const handleRegisterClick = () => {
    setOpenRegister(true);
  };
  const logoClick=()=>{
    navigate('/')
  }
  const lendingLogoClick=()=>{
    navigate('/lending')
  }
  const handleNavMenuClick = (value) => {
    switch (value) {
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
<div style={{display:'flex', width:'90vw'}}>
    <img src={Logo} style={{ width: "26rem", height: "13rem", }} alt="Logo"  onClick={logoClick}/>

        <Toolbar disableGutters>

          <div style={{'dispplay':"inline-block","backgroundColor": "rgba(196, 82, 3, 0.7)", "borderRadius":"1rem", width:'65vw', display:'flex', justifyContent:'space-evenly'
}}>
            {pages.map((page, index) => (
              <Button
                key={page}
                onClick={() => { handleNavMenuClick(page) }}
                sx={{
                  fontSize: "2.2rem",
                  fontFamily: "monospace",
                  fontWeight: 500,
                  color: "black",
                }}
              >
                {page}
              </Button>
              
            ))}
          {/* </Box> */}
          </div>
        </Toolbar>    
        <Register open={openRegister} setOpen={setOpenRegister} />
        <img src={OptionLogo} style={{ width: "26rem", height: "13rem", }} alt="Logo"  onClick={lendingLogoClick}/>

        </div>
  );
}
export default Navbar;
