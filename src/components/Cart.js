import React from 'react';

const Cart = ({ cart, setShowCart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const checkout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert(`Order placed successfully! Total: $${total.toFixed(2)}`);
    setShowCart(false);
  };

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={() => setShowCart(false)}>&times;</span>
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">{item.image}</div>
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>${item.price}</p>
                </div>
                <div className="cart-item-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
        <button className="btn-primary" onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;