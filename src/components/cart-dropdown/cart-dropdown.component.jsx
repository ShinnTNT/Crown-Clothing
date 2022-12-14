import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component.jsx';

import './cart-dropdown.styles.scss';


const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
      navigate('/checkout')
    }

    return (
        <div className="cart-dropdown-container">
           <div className="cart-items">
              {
                cartItems.map((cartItem)=> 
                 (<CartItem key={cartItem.id} cartItem={cartItem}/>)
                )
              }
           </div>
           <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </div>
    )
}

export default CartDropdown;