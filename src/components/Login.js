import React, { useState } from 'react';
import '../Login.css';

const Login = ({ setCurrentPage, setIsAuthenticated, setUserRole }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    role: 'customer'
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Basic validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      setLoading(false);
      return;
    }

    if (!isLogin && !formData.name) {
      setError('Please enter your name');
      setLoading(false);
      return;
    }

    // TODO: Add Supabase authentication here
    // For now, simulate authentication
    setTimeout(() => {
      setLoading(false);
      setIsAuthenticated(true);
      setUserRole(formData.role);
      
      // Redirect based on role
      switch(formData.role) {
        case 'customer':
          setCurrentPage('customer');
          break;
        case 'artisan':
          setCurrentPage('artisan');
          break;
        case 'consultant':
          setCurrentPage('consultant');
          break;
        case 'admin':
          setCurrentPage('admin');
          break;
        default:
          setCurrentPage('home');
      }
    }, 1000);
  };

  return (
    <div className="page login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <h1>🏺 Tribal Crafts</h1>
            <p>Preserving Heritage Through Authentic Craftsmanship</p>
          </div>

          <div className="login-tabs">
            <button 
              className={`tab-btn ${isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(true);
                setError('');
              }}
            >
              Login
            </button>
            <button 
              className={`tab-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(false);
                setError('');
              }}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="role">I am a...</label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="customer">Customer - Browse & Buy</option>
                  <option value="artisan">Artisan - Sell My Crafts</option>
                  <option value="consultant">Cultural Consultant</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            )}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}

            <button 
              type="submit" 
              className="btn-primary login-btn"
              disabled={loading}
            >
              {loading ? (
                <span className="loading-text">
                  {isLogin ? 'Logging in...' : 'Creating account...'}
                </span>
              ) : (
                isLogin ? 'Login' : 'Create Account'
              )}
            </button>
          </form>

          <div className="login-footer">
            {isLogin ? (
              <p>
                Don't have an account?{' '}
                <button 
                  className="link-btn"
                  onClick={() => {
                    setIsLogin(false);
                    setError('');
                  }}
                >
                  Sign up here
                </button>
              </p>
            ) : (
              <p>
                Already have an account?{' '}
                <button 
                  className="link-btn"
                  onClick={() => {
                    setIsLogin(true);
                    setError('');
                  }}
                >
                  Login here
                </button>
              </p>
            )}
          </div>

          <div className="guest-access">
            <p>Or</p>
            <button 
              className="btn-secondary"
              onClick={() => setCurrentPage('home')}
            >
              Continue as Guest
            </button>
          </div>
        </div>

        <div className="login-decorative">
          <div className="craft-circle">🏺</div>
          <div className="craft-circle">🧺</div>
          <div className="craft-circle">📿</div>
          <div className="craft-circle">🪶</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
