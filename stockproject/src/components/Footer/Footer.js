import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <nav>
        <ul style={footerListStyle}>
          <li style={footerListItemStyle}>
            <button onClick={() => navigate('/aboutUs')} style={footerButtonStyle}>
              About Us
            </button>
          </li>
          <li style={footerListItemStyle}>
            <button onClick={() => navigate('/refundPolicies')} style={footerButtonStyle}>
              Refund Policies
            </button>
          </li>
          <li style={footerListItemStyle}>
            <button onClick={() => navigate('/termsAndConditions')} style={footerButtonStyle}>
              T&C
            </button>
          </li>
          <li style={footerListItemStyle}>
            <button onClick={() => navigate('/privatePolicies')} style={footerButtonStyle}>
              Private Policies
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

const footerListStyle = {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'center',
  padding: 0,
};

const footerListItemStyle = {
  margin: '0 20px',
};

const footerButtonStyle = {
  background: 'blue',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  cursor: 'pointer',
  borderRadius: '4px',
  transition: 'background 0.8s ease',
};


export default Footer;
