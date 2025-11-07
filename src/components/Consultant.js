import React from 'react';

const Consultant = ({ products, approveProduct }) => {
  const pendingProducts = products.filter(product => !product.approved);

  return (
    <div className="page">
      <div className="container">
        <h1>Cultural Heritage Verification</h1>
        <div className="pending-reviews">
          <h2>Pending Product Reviews ({pendingProducts.length})</h2>
          <div className="pending-products-list">
            {pendingProducts.map(product => (
              <div key={product.id} className="review-card">
                <div className="product-preview">
                  <div className="product-image">{product.image}</div>
                  <div className="product-details">
                    <h3>{product.title}</h3>
                    <p><strong>Category:</strong> {product.category}</p>
                    <p><strong>Price:</strong> ${product.price}</p>
                    <p><strong>Artisan:</strong> {product.artisan}</p>
                    <p><strong>Description:</strong> {product.description}</p>
                  </div>
                </div>
                <div className="review-actions">
                  <div className="cultural-notes">
                    <h4>Cultural Verification Notes:</h4>
                    <textarea 
                      placeholder="Add notes about cultural authenticity, traditional techniques, or heritage significance..."
                      rows="3"
                    />
                  </div>
                  <div className="action-buttons">
                    <button 
                      className="btn-primary"
                      onClick={() => {
                        approveProduct(product.id);
                        alert('Product approved and published!');
                      }}
                    >
                      ✅ Approve & Publish
                    </button>
                    <button className="btn-secondary">
                      📝 Request Changes
                    </button>
                    <button className="btn-danger">
                      ❌ Reject
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {pendingProducts.length === 0 && (
              <div className="no-pending">
                <p>No products pending review at this time.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultant;