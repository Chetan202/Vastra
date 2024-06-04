import React from 'react';
import './MenPage.css';
import productsData from '../data.json';

function MenPage() {
  if (!productsData || !productsData.men) {
    return <div>Error: Products data is not available.</div>;
  }

  const menProducts = productsData.men.slice(0, 6);

  return (
    <div className='MenPage'>
      <div className='TitleMen'>
        <div style={{ fontSize: '24px' }}>
          MEN
          <br />
          COLLECTION
        </div>
      </div>
      <div className="product-list-men">
        {menProducts.map(product => (
          <div className="product-card-men" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image-men" />
            <div className="product-info-men">
              <h2>{product.name}</h2>
              <p>Price: ${product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenPage;
