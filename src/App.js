import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Customer from './components/Customer';
import Artisan from './components/Artisan';
import Consultant from './components/Consultant';
import Admin from './components/Admin';
import Cart from './components/Cart';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Handwoven Basket',
      price: 45,
      category: 'baskets',
      image: '🧺',
      description: 'Traditional woven basket made from natural fibers',
      rating: 4.8,
      artisan: 'Maya Craft Co.',
      approved: true
    },
    {
      id: 2,
      title: 'Clay Pottery Vase',
      price: 65,
      category: 'pottery',
      image: '🏺',
      description: 'Handcrafted clay vase with traditional patterns',
      rating: 4.9,
      artisan: 'Earth Artisans',
      approved: true
    },
    {
      id: 3,
      title: 'Beaded Necklace',
      price: 35,
      category: 'jewelry',
      image: '📿',
      description: 'Colorful beaded necklace with cultural significance',
      rating: 4.7,
      artisan: 'Tribal Gems',
      approved: false
    }
  ]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity === 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => 
      prev.map(item => 
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Date.now(),
      rating: 0,
      approved: false
    };
    setProducts(prev => [...prev, newProduct]);
  };

  const approveProduct = (productId) => {
    setProducts(prev => 
      prev.map(product => 
        product.id === productId ? { ...product, approved: true } : product
      )
    );
  };

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home setCurrentPage={setCurrentPage} />;
      case 'customer': return <Customer products={products.filter(p => p.approved)} addToCart={addToCart} />;
      case 'artisan': return <Artisan products={products} addProduct={addProduct} />;
      case 'consultant': return <Consultant products={products} approveProduct={approveProduct} />;
      case 'admin': return <Admin products={products} />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        setShowCart={setShowCart}
      />
      {renderPage()}
      {showCart && (
        <Cart 
          cart={cart}
          setShowCart={setShowCart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;