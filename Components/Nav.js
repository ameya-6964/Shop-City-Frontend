import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";
import { NavItems, NavStyles } from "../styles/NavStyles";

export default function Nav() {
  return (
    <NavStyles>
      <Link href="/">Shop City.</Link>
      <NavItems>
        <div>
          <FiShoppingBag />
          <h3>Cart</h3>
        </div>
      </NavItems>
    </NavStyles>
  );
}
