import React, { useState } from 'react';
import Header from './components/Food/Layout/Header';
import Meals from './components/Food/Meals/Meals';
import Cart from './components/Food/Cart/Cart';
import CartProvider from './store/CartProvider'
const App = () => {
  // 장바구니 모달을 열고닫는 상태변수
  const [cartIsShown,setcartIsShown]=useState(false);
  // 모달을 열어주는 핸들러
  const showCartHandler=()=>setcartIsShown(true);
  
  // 모달을 닫아주는 핸들러
  const hideCartHandler=()=>setcartIsShown(false);
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <div id="main">
        <Meals />
      </div>
    </CartProvider>
  );
};

export default App;
