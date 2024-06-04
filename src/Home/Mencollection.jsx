import React from 'react';
import './Mencollection.css';
import productsData from '../data.json';
import MenPage from '../Men/MenPage'
import { useNavigate } from 'react-router-dom';

function Mencollection() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/menpage');
  };
  

  if (!productsData || !productsData.men) {
    return <div>Error: Products data is not available.</div>;
  }

  const menProducts = productsData.men.slice(0, 3);

  return (
    <div className='Mencollection'>
      <div className='TitleMen'>
        <div style={{ fontSize: '24px' }}>
          MEN
          <br />
          COLLECTION
        </div>
        <button className='MenButton' onClick={handleButtonClick}>View the Collection</button>
      </div>
      <div className="product-listmen">
        {menProducts.map(product => (
          <div className="product-cardmen" key={product.id}>
            <img src={product.image} alt={product.name} className="product-imagemen" />
            <div className="product-infomen">
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mencollection;
