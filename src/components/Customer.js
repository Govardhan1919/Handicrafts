import React, { useState } from 'react';

const Customer = ({ products, addToCart }) => {
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState(500);

  const filteredProducts = products.filter(product => {
    const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
    const priceMatch = product.price <= priceFilter;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="page">
      <div className="container">
        <h1>Handcrafted Treasures</h1>
        <div className="filter-bar">
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="pottery">Pottery</option>
            <option value="textiles">Textiles</option>
            <option value="jewelry">Jewelry</option>
            <option value="baskets">Baskets</option>
          </select>
          <input 
            type="range" 
            min="10" 
            max="500" 
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
          <span>Max: ${priceFilter}</span>
        </div>
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-image">{product.image}</div>
              <div className="product-info">
                <div className="product-title">{product.title}</div>
                <div className="product-price">${product.price}</div>
                <div className="product-rating">
                  {'⭐'.repeat(Math.floor(product.rating))} {product.rating}
                </div>
                <p>{product.description}</p>
                <button 
                  className="add-to-cart"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customer;