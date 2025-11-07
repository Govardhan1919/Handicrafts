import React from 'react';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="page">
      <section className="hero">
        <div className="hero-content">
          <h1>Preserving Traditional Crafts</h1>
          <p>Connect with authentic tribal artisans and discover handcrafted treasures that tell stories of heritage and tradition.</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => setCurrentPage('customer')}>Explore Crafts</button>
            <button className="btn-secondary" onClick={() => setCurrentPage('artisan')}>Join as Artisan</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="craft-showcase">
            <div className="craft-item">🏺</div>
            <div className="craft-item">🧺</div>
            <div className="craft-item">🪶</div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Supporting Tribal Communities</h2>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Authentic Crafts</h3>
              <p>Genuine handmade items preserving traditional techniques</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Reach</h3>
              <p>Connect local artisans with worldwide customers</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💚</div>
              <h3>Fair Trade</h3>
              <p>Supporting communities through ethical commerce</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;