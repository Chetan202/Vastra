import React from 'react';
import './WomenPage.css';
import productsData from '../data.json';

function WomenPage() {
  if (!productsData || !productsData.women) {
    return <div>Error: Products data is not available.</div>;
  }

  const womenProducts = productsData.women.slice(0, 5);

  return (
    <div className='WomenPage'>
      <div className='TitleWomen'>
        <div style={{ fontSize: '24px' }}>
          WOMEN
          <br />
          COLLECTION
        </div>
      </div>
      <div className="product-list-women">
        {womenProducts.map(product => (
          <div className="product-card-women" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image-women" />
            <div className="product-info-women">
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WomenPage;
