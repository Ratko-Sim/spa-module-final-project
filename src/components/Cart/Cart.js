import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, Link } from "react-router-dom";
import { addToCart, removeFromCart } from '../../Redux/actions/CartAction';
import MessageBox from '../MessageBox';
import "./Cart.scss";


export const Cart = () => {
  const location = useLocation();

  const { productId } = useParams();
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {

    dispatch(removeFromCart(id))
  };

  const checkoutHandler = () => {
    // history.push('/signin?redirect=shipping')
  }
  return (
    <div className={"cart-container"}>
      <h1 className="cart-title">
        Shopping cart
      </h1>
      {cartItems.length === 0 ? <MessageBox>
        Cart is empty. <Link to="/">Go Shopping</Link>
      </MessageBox>
        :
        (
          <div className="cart-items-wrapper">
            {
              cartItems.map((item) => (
                <div key={item.product}
                  className="cart-card">

                  <div className="image">
                    <img src={item.image}
                      alt={item.name} />
                  </div>
                  <div className="link">
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </div>
                  <div className="option">
                    <select className="select" value={item.qty} onChange={e => dispatch(addToCart(item.product, Number(e.target.value)))}>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>

                      {/* {[...Array(item.product).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))} */}

                    </select>
                  </div>
                  <div className="price">€{item.price}</div>
                  <div>
                    <button className="delete" type="button" onClick={() => removeFromCartHandler(item.product)}>Delete</button>
                  </div>

                </div>
              ))
            }
          </div>
        )}

      <div className="checkout-wrapper">
        <div className="top">
          <h2>
            Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : € {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
          </h2>
        </div>
        <div className="bottom">
          <button type="button" onClick={checkoutHandler} disabled={cartItems.length === 0}>Proceed to checkout</button>
        </div>
      </div>



    </div>
  )
}

