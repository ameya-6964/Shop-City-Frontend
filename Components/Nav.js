import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavStyles, NavItems } from "../styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "../lib/context";

export default function Nav() {
  const { showCart, setShowCart } = useStateContext();
  return (
    <NavStyles>
      <Link href="/">Shop City 🛍️</Link>
      <NavItems>
        <div onClick={() => setShowCart(true)}>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
      {showCart && <Cart />}
    </NavStyles>
  );
}
