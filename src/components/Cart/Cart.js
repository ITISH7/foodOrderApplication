import Modal from "../UI/Modal";
import "./Cart.css";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalAmount = ` $${cartCtx.totalAmount.toFixed(2)}`;
  const hasitems = cartCtx.items.length > 0;

  const addItemsHandler = item =>{
    cartCtx.addItems({...item,amount:1})
  }
  const removeItemHandler = id =>{
    cartCtx.removeItem(id);
  }
  const cartItems = (
    <ul className="cart-items">
      {cartCtx.items.map((meals) => (
        <CartItem
          key={meals.id}
          name={meals.name}
          price={meals.price}
          amount={meals.amount}
          onAdd ={addItemsHandler.bind(null,meals)}
          onRemove ={removeItemHandler.bind(null,meals.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCard={props.hideCard}>
      {cartItems}
      <div className="total">
        <span>Total Price</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button--alt" onClick={props.hideCard}>
          close
        </button>
        {hasitems && <button className="button">order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
