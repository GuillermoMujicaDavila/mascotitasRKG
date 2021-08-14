import { useContext } from "react";
import "./Cart.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import CartItem from "./CartItem";
import articulosService from "../services/articulosService"

const Cart = () => {
  const { showCart, cartItems, showHideCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };

  return (
    <>
      {showCart && (
        <div className='cart__wrapper'>
          <div style={{ textAlign: "right" }}>
            <i
              style={{ cursor: "pointer" }}
              className='fa fa-times-circle'
              aria-hidden='true'
              onClick={showHideCart}
            ></i>
          </div>
          {/* <div className='cart__innerWrapper'>
            {cartItems.length === 0 ? (
              <h4>Cart is Empty</h4>
            ) : (
              <ul>
                {cartItems.map((arti) => (
                  <CartItem key={arti.arti_id} arti={arti} />
                ))}
              </ul>
            )}
          </div> */}
          <div className='Cart__cartTotal'>
            <div>Cart Total</div>
            <div></div>
            <div style={{ marginLeft: 5 }}>
              {formatCurrency(
                cartItems.reduce((amount, arti) => arti_precio + amount, 0),
                opts
              )}
            </div>
            <button type="submit" className="btn btn-dark" style={{
                            backgroundColor:'rgb(17, 95, 139)',
                            border:'none',
                            display:'flex',
                            justifyContent:'center',
                            margin:'0 auto',
                            width:'10vw',
                            marginTop:'25px',

                            
                        }}>
							Ir a carrito
						</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
