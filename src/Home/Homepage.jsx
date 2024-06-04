import React, { useEffect, useState } from 'react';
import './Homepage.css';
import Slideshow from './Slideshow';
import MidSlider from './MidSlider';
import WomenCollection from './Womencollection';
import Mencollection from './Mencollection';
import YouTube from 'react-youtube';
import LogoSlider from './LogoSlider';
import GooglePayButton from '@google-pay/button-react';

function Homepage() {


  const videoId = 'x8zGsWuu-e0'; // YouTube video ID only
 

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (newEmail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError(null); // Clear error message if email is valid
    }
  };

  const handleSendClick = () => {
    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError('Invalid email address');
    } else {
      // Send email logic here
      console.log('Email sent:', email);
    }
  };

  return (
    <div className="home">
      <div className="level1">
        <div className="lines">
          <p>From t-shirts to jackets, our range of clothing is carefully crafted from premium materials and made for the any occasion.</p>
          <h1>LIVE LIFE ELEVATED</h1>
        </div>
        <div className="level1_img_div">
          <Slideshow />
        </div>
      </div>
      <div className="level2">
        <MidSlider />
      </div>
      <div className="level3">
        <WomenCollection />
      </div>
      <div className="level4">
        <Mencollection />
      </div>
      <div className="flagship" >
        <h2 className='flagship-head'>OUR FLAGSHIP</h2>
        <div className='flagship-body'>
          <div className='flagship-text'>
            <h2>FASHION STORE</h2>
            <p>Leaning out is the unfortunately radical notion that it's the system that's broken not us. That's why instead of changing ourselves, we're enjoying ourselves and changing the world.</p>
          </div>
          <div className='flagship-player'>
            <YouTube videoId={videoId} opts={{ width: 300, height: 200 }} />
          </div>
        </div>
      </div>
      <div className="level6">
        <LogoSlider />
      </div>
      <div className='Bottom'>
        <div className='col1'>
          <h2>NEED ASSISTANCE</h2>
          <p>FAQ</p>
          <p>SHIPPING</p>
          <p>RETURNS</p>
          <p>CONTACT</p>
        </div>
        <div className='col2'>
          <h2>THE COMPANY</h2>
          <p>ABOUT</p>
          <p>RESPONSIBILITY</p>
          <p>CAREERS</p>
          <p>PRIVACY POLICY</p>
        </div>
        <div className='col3'>
          <h2>FOUR SOCIAL MEDIA</h2>
          <p>LINKEDIN</p>
          <p>INSTAGRAM</p>
          <p>TWITTER</p>
        </div>
        <div className='col4'>
          <div className='box'>
            <h2>ABOUT US</h2>
            <p>Aiming to create gender equality in the outdoors world</p>
            <button className='discover'>DISCOVER NOW</button>
          </div>
        </div>
      </div>
      <div className='Footer'>
        <h1>JOIN OUR NEWSLETTER</h1>
        <div>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="example@example.com"
          />
          <button onClick={handleSendClick}>Send</button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </div>
        <GooglePayButton
        environment="TEST"
        paymentRequest={{
          apiVersion: 2,
          apiVersionMinor: 0,
          allowedPaymentMethods: [
            {
              type: 'CARD',
              parameters: {
                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                allowedCardNetworks: ['MASTERCARD', 'VISA'],
              },
              tokenizationSpecification: {
                type: 'PAYMENT_GATEWAY',
                parameters: {
                  gateway: 'example',
                  gatewayMerchantId: 'exampleGatewayMerchantId',
                },
              },
            },
          ],
          merchantInfo: {
            merchantId: '12345678901234567890',
            merchantName: 'Demo Merchant',
          },
          transactionInfo: {
            totalPriceStatus: 'FINAL',
            totalPriceLabel: 'Total',
            totalPrice: '1.00',
            currencyCode: 'USD',
            countryCode: 'US',
          },
        }}
        onLoadPaymentData={paymentRequest => {
          console.log('load payment data', paymentRequest);
        }}
        
      />
      </div>
    </div>
  );
}

export default Homepage;
