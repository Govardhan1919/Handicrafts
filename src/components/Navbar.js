import React from 'react';

const Navbar = ({ currentPage, setCurrentPage, cartCount, setShowCart, isAuthenticated, userRole, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          <h2>🏺 Tribal Crafts</h2>
        </div>
        <ul className="nav-menu">
          <li><a href="#home" onClick={() => setCurrentPage('home')} className={currentPage === 'home' ? 'active' : ''}>Home</a></li>
          <li><a href="#customer" onClick={() => setCurrentPage('customer')} className={currentPage === 'customer' ? 'active' : ''}>Shop</a></li>
          <li><a href="#artisan" onClick={() => setCurrentPage('artisan')} className={currentPage === 'artisan' ? 'active' : ''}>Artisan</a></li>
          <li><a href="#consultant" onClick={() => setCurrentPage('consultant')} className={currentPage === 'consultant' ? 'active' : ''}>Consultant</a></li>
          <li><a href="#admin" onClick={() => setCurrentPage('admin')} className={currentPage === 'admin' ? 'active' : ''}>Admin</a></li>
        </ul>
        <div className="nav-actions">
          <div className="cart-icon" onClick={() => setShowCart(true)}>
            🛒 <span id="cart-count">{cartCount}</span>
          </div>
          {isAuthenticated ? (
            <div className="user-menu">
              <span className="user-role">👤 {userRole}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <button className="login-btn-nav" onClick={() => setCurrentPage('login')}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;