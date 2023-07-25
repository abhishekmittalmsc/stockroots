import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import axios from "axios";
import { Button } from "@mui/material";
import Payment from './Payment'

const MyCart = ({ course, onRemoveItem }) => {
  const [cartCourses, setCartCourses] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleRemoveItem = async (course) => {
    try {
      await axios.post("http://localhost:5000/api/removeCart", {
        data: { courseId: course._id, token:localStorage.token },
      });
      
      onRemoveItem(course._id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCartData();
  }, []);
  
  useEffect(() => {
    fetchCartData();
  }, [handleRemoveItem]);

  const fetchCartData = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post("http://localhost:5000/api/cartData", {
        token,
      });
      const data = response.data;
      setCartCourses(data.courses);
      calculateTotalAmount(data.courses);
    } catch (error) {
      // Handle error
      console.log(error);
    }
  };

  const calculateTotalAmount = (cart) => {
    let total = 0;
    cart.forEach((course) => {
      // Assuming each course has a "courseFees" property
      total += parseInt(course.courseFees);
    });
    setTotalAmount(total);
  };

  return (
    <div>
      <h1>Cart page</h1>
      {cartCourses && cartCourses.length > 0 ? (
        <div>
          <h2>Cart Items:</h2>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>S.No</TableCell>
                  <TableCell>Course Name</TableCell>
                  <TableCell>Course Poster</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartCourses.map((course, index) => (
                  <TableRow key={course._id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{course.courseName}</TableCell>
                    <TableCell>
                      <Card  sx={{
    boxShadow: 'none',
    background: 'transparent'
  }}>
                      <CardMedia
  component="img"
  sx={{
    height: 100,
    width: 100,
    margin: 0,
    padding: 0,
    objectFit: 'cover',
    objectPosition: 'top',
  }}
  image={course.coursePoster}
  alt="Course Poster"
/>


                      </Card>
                    </TableCell>
                    <TableCell>{course.courseFees}
                    </TableCell>
                    <TableCell><Button onClick={()=>{handleRemoveItem(course)}} >Remove</Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div>Total Amount Payable: {totalAmount}</div>
        </div>
      ) : (
        <div>Your cart is empty.</div>
      )}
      <Payment amount={totalAmount}/>
    </div>
  );
};

export default MyCart;
