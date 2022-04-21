import "./Content.scss";
import ItemPage from "./ItemPage";
import CartPage from "./CartPage";
import { items } from "./static-data";

const Content = ({ tab, onAddToCart, cart }) => {
  switch (tab) {
    default:
    case "items":
      return <ItemPage items={items} onAddToCart={onAddToCart} />;
    case "cart":
      return <CartPage items={cart} />;
  }
};

export default Content;
