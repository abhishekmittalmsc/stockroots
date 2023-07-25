import React, { useState, useEffect} from 'react';
import axios from 'axios';
import { Button } from "@mui/material";


const generateRandomNumber = () => {
  return Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
};


const PaymentComponent = (amt) => {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    // Generate the Order ID on component mount
    const currentDate = new Date().toLocaleDateString();
    const randomNumber = generateRandomNumber();
    // const newOrderId = currentDate.replace("/","") + randomNumber.toString();
    const newOrderId='1234';
    setOrderId(newOrderId);
  }, []);
  const handlePayment = async () => {
    const amount=amt.amount;
    try {
      // Make a POST request to your server-side payment route
      await axios.post('http://localhost:5000/api/payment', {
        orderId,
        amount,
        redirectUrl: window.location.origin + '/payment-response',
        // Add other required payment data
      })
      .then((response) => {
        // Redirect the user to CCAvenue payment page
        console.log('responseeeeee', response.data)
        const newWindow = window.open('', '_blank');
        newWindow.document.write(response.data);
        newWindow.document.close();
      })
    } catch (error) {
      console.log('errrrrrrrrrr', error);
    }
  };

  return (
    <div>
    <div>
      <h1>Payment Page</h1>
      
      <div>
      <label htmlFor="orderId">Order ID:</label>
      <input
        type="text"
        id="orderId"
        value={orderId}
        readOnly
      />
    </div>
    <br/>
    <label htmlFor="Amount">Amount:   </label>
      <input
        type="text"
        id="Amount"
        value={amt.amount}
        readOnly
      />
    </div>
    
    <br/>
      <Button onClick={handlePayment} color="primary" >Proceed to Payment</Button>
    </div>
  );
};

export default PaymentComponent;
