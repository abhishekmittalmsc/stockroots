import React, { useState } from 'react';
import axios from 'axios';

const PaymentComponent = () => {
  const [orderId, setOrderId] = useState('');
  const [amount, setAmount] = useState(0);
  const [redirectUrl, setRedirectUrl] = useState('');

  const handlePayment = async () => {
    try {
      // Make a POST request to your server-side payment route
      await axios.post('http://localhost:5000/api/payment', {
        orderId,
        amount,
        redirectUrl,
        // Add other required payment data
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <input type="text" placeholder="Order ID" value={orderId} onChange={(e) => setOrderId(e.target.value)} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Redirect URL" value={redirectUrl} onChange={(e) => setRedirectUrl(e.target.value)} />
      {/* Add other payment input fields */}
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default PaymentComponent;
