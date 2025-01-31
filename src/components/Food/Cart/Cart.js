import React, { useContext } from 'react';
import CartModal from '../../UI/Modal/CartModal';
import styles from './Cart.module.scss';
import CartContext from '../../../store/cart-context';
import CartItem from './CartItem';

const DUMMY_CART = [
  {
    id: 'c1',
    name: '스시',
    amount: 2,
    price: 46000,
  },
  {
    id: 'c2',
    name: '띠드버거',
    amount: 1,
    price: 12000,
  },
];
const Cart = ({onClose}) => {
  const {
    'cart-items': cartItemStyle,
    total,
    actions,
    'button--alt': btnAlt,
    button,
  } = styles;

  const { items, totalPrice } = useContext(CartContext);
  

  return (
    <CartModal onClose={onClose}>
      {/* 주문 내역 */}
      <ul className={cartItemStyle}>
        {items.map((cartItem) => (
          <CartItem 
            key={cartItem.id}
            cart={cartItem}
          />
        ))}
      </ul>
      <div className={total}>
        <span>주문 총액</span>
        <span>{new Intl.NumberFormat('ko-KR').format(totalPrice)}원</span>
      </div>
      <div className={actions}>
        <button className={btnAlt} onClick={onClose}>닫기</button>
        {/* 조건부 랜더링 장바구니에 물건이 안담겨 있으면 주문버튼 안나오게 */}
        {items.length>0 && <button className={button}>주문</button>}
      </div>
    </CartModal>
  );
};

export default Cart;
