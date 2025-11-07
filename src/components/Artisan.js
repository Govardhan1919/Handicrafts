import React, { useState } from 'react';

const Artisan = ({ products, addProduct }) => {
  const [activeTab, setActiveTab] = useState('add-product');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: '🎨'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.title && formData.description && formData.price && formData.category) {
      addProduct({
        ...formData,
        price: parseFloat(formData.price),
        artisan: 'Current User'
      });
      setFormData({
        title: '',
        description: '',
        price: '',
        category: '',
        image: '🎨'
      });
      alert('Product added successfully! Awaiting approval.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const myProducts = products.filter(p => p.artisan === 'Current User');

  return (
    <div className="page">
      <div className="container">
        <h1>Artisan Dashboard</h1>
        <div className="artisan-tabs">
          <button 
            className={`tab-btn ${activeTab === 'add-product' ? 'active' : ''}`}
            onClick={() => setActiveTab('add-product')}
          >
            Add Product
          </button>
          <button 
            className={`tab-btn ${activeTab === 'my-products' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-products')}
          >
            My Products
          </button>
          <button 
            className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
        </div>

        {activeTab === 'add-product' && (
          <div className="tab-content">
            <form onSubmit={handleSubmit} className="product-form">
              <h2>Add New Product</h2>
              <input 
                type="text" 
                name="title"
                placeholder="Product Title" 
                value={formData.title}
                onChange={handleChange}
                required 
              />
              <textarea 
                name="description"
                placeholder="Product Description" 
                value={formData.description}
                onChange={handleChange}
                required
              />
              <input 
                type="number" 
                name="price"
                placeholder="Price ($)" 
                value={formData.price}
                onChange={handleChange}
                required 
              />
              <select 
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="pottery">Pottery</option>
                <option value="textiles">Textiles</option>
                <option value="jewelry">Jewelry</option>
                <option value="baskets">Baskets</option>
              </select>
              <div className="file-upload">
                <label>Select Emoji Icon:</label>
                <select 
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                >
                  <option value="🏺">🏺 Pottery</option>
                  <option value="🧺">🧺 Basket</option>
                  <option value="📿">📿 Jewelry</option>
                  <option value="🪶">🪶 Feather</option>
                  <option value="🎨">🎨 Art</option>
                </select>
              </div>
              <button type="submit" className="btn-primary">Add Product</button>
            </form>
          </div>
        )}

        {activeTab === 'my-products' && (
          <div className="tab-content">
            <h2>My Products</h2>
            <div className="products-grid">
              {myProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">{product.image}</div>
                  <div className="product-info">
                    <div className="product-title">{product.title}</div>
                    <div className="product-price">${product.price}</div>
                    <div className={`approval-status ${product.approved ? 'approved' : 'pending'}`}>
                      {product.approved ? '✅ Approved' : '⏳ Pending Approval'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="tab-content">
            <h2>Customer Orders</h2>
            <div className="orders-list">
              <div className="order-item">
                <h3>Order #001</h3>
                <p>Customer: John Doe</p>
                <p>Product: Handwoven Basket</p>
                <p>Status: Processing</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Artisan;