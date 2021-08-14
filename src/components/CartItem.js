import { useContext } from "react";
import "./CartItem.css";
import CartContext from "../context/cart/CartContext";
import formatCurrency from "format-currency";
import {Link} from "react-router-dom"

const CartItem = ({ arti }) => {
  const { removeItem } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "€" };
  return (
    <li className='CartItem__item'>
      <img src={arti.arti_imagen} alt='' />
      <div>
        {item.arti_nombre} {formatCurrency(`${arti.arti_id}`, opts)}
      </div>
      <button className='CartItem__button' onClick={() => removeItem(`${arti.arti_id}`)}>
        ELIMINAR
      </button>
    </li>
  );
};

export default CartItem;
