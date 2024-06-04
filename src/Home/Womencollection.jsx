import React from 'react';
import './Womencollection.css';
import productsData from '../data.json';
import { useNavigate } from 'react-router-dom';
import Womenpage from "../Women/WomenPage"

function WomenCollection() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/Womenpage');
  };
  
  if (!productsData || !productsData.women) {
    return <div>Error: Products data is not available.</div>;
  }

  const womenProducts = productsData.women.slice(0, 3);

  return (
    <div className='Womencollection'>
      <div className='TitleWomen-coll'>
        <div style={{  fontSize: '24px' }}>
          WOMAN
          <br />
          COLLECTION
        </div>
        <button className='womenButton-coll'  onClick={handleButtonClick}>View the Collection</button>
      </div>
      <div className="product-listwomen-coll">
        {womenProducts.map(product => (
          <div className="product-cardwomen-coll" key={product.id}>
            <img src={product.image} alt={product.name} className="product-imagewomen-coll" />
            <div className="product-infowomen-coll">
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenCollection;
