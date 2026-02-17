import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './CartPage.scss';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, subtotal, tax, total } = useCart();

  return (
    <div className="cart-page">
      <div className="small-container">
        <h2 className="cart-title">Shopping Cart</h2>

        {cartItems.length > 0 ? (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <div className="cart-info">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                          <p>{item.name}</p>
                          {item.size && <small>Size: {item.size}</small>}
                          <small>Price: ${item.price.toFixed(2)}</small>
                          <button
                            className="remove-btn"
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="qty-control">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </td>
                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="cart-bottom">
              <button className="clear-cart-btn" onClick={clearCart}>
                Clear Cart
              </button>

              <div className="total-price">
                <table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>${subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Tax (17%)</td>
                      <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr className="total-row">
                      <td>Total</td>
                      <td>${total.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="checkout-actions">
              <Link to="/products" className="continue-shopping">
                ← Continue Shopping
              </Link>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#ff523b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="3" y1="6" x2="21" y2="6" stroke="#ff523b" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M16 10a4 4 0 01-8 0" stroke="#ff523b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Your cart is empty</h3>
            <p>Looks like you haven't added any products yet.</p>
            <Link to="/products" className="continue-shopping">
              Start Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;