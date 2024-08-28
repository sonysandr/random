import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    // we need to subscribe to our store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);


  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart());
    // clearCart is an action from cartSlice
  }

  return (
    <div className="text-center">
      
        <h1 className="text-2xl font-bold ">Cart</h1>
        <div className="w-6/12 m-auto">
        {/* The click on this button should clear my card */}
            <button className="p-2 m-2 text-white bg-black rounded-lg" onClick={ handleClearCart}>
                Clear Cart
            </button>
        {cartItems.length == 0  && <h1>Cart empty , please Add items</h1>}
            
            <ItemList items={cartItems} />
            
        </div>
     
    </div>
  );
};

export default Cart;


