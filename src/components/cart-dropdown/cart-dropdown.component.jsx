import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  const cartOpenHandler = () => {
    setIsCartOpen(false);
  };

  const handleCheckoutOps = () => {
    cartOpenHandler();
    goToCheckoutHandler();
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={handleCheckoutOps}>Checkout</Button>
    </div>
  );
};

export default CartDropdown;
