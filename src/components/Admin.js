import React from 'react';

const Admin = ({ products }) => {
  const totalProducts = products.length;
  const approvedProducts = products.filter(p => p.approved).length;
  const pendingProducts = products.filter(p => !p.approved).length;

  const generateReport = () => {
    alert('Monthly report generated successfully!');
  };

  const clearData = () => {
    if (window.confirm('Are you sure you want to clear all test data?')) {
      alert('Test data cleared!');
    }
  };

  return (
    <div className="page">
      <div className="container">
        <h1>Admin Dashboard</h1>
        <div className="admin-stats">
          <div className="stat-card">
            <h3>Total Products</h3>
            <span>{totalProducts}</span>
          </div>
          <div className="stat-card">
            <h3>Approved Products</h3>
            <span>{approvedProducts}</span>
          </div>
          <div className="stat-card">
            <h3>Pending Reviews</h3>
            <span>{pendingProducts}</span>
          </div>
          <div className="stat-card">
            <h3>Active Artisans</h3>
            <span>24</span>
          </div>
          <div className="stat-card">
            <h3>Monthly Sales</h3>
            <span>$12,450</span>
          </div>
          <div className="stat-card">
            <h3>Customer Reviews</h3>
            <span>4.8⭐</span>
          </div>
        </div>
        
        <div className="admin-actions">
          <h2>Platform Management</h2>
          <div className="action-buttons">
            <button className="btn-primary" onClick={generateReport}>
              📊 Generate Report
            </button>
            <button className="btn-secondary" onClick={clearData}>
              🗑️ Clear Test Data
            </button>
            <button className="btn-secondary">
              👥 Manage Users
            </button>
            <button className="btn-secondary">
              ⚙️ Platform Settings
            </button>
          </div>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-time">2 hours ago</span>
              <span className="activity-text">New product submitted by Maya Craft Co.</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">5 hours ago</span>
              <span className="activity-text">Product approved: Clay Pottery Vase</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">1 day ago</span>
              <span className="activity-text">New artisan registered: Tribal Gems</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;