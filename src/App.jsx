import React, { useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import "./App.scss";

const App = () => {
  const [activeTab, setActiveTab] = useState("items");
  const [cart, setCart] = useState([]);
  const summarizeCart = (cart) => {
    const groupedItems = cart.reduce((summary, item) => {
      summary[item.id] = summary[item.id] || {
        ...item,
        count: 0,
      };
      summary[item.id].count++;
      return summary;
    }, {});
    return Object.values(groupedItems);
  };
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeItem = (item) => {
    let index = cart.findIndex((i) => i.id === item.id);
    if (index >= 0) {
      setCart((cart) => {
        const copy = [...cart];
        copy.splice(index, 1);
        return copy;
      });
    }

    return (
      <div className="App">
        <div>{cart.length} items</div>
        <Nav activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="App-content">
          <Content
            tab={activeTab}
            onAddToCart={addToCart}
            onRemoveItem={removeItem}
            cart={summarizeCart(cart)}
          />
        </main>
      </div>
    );
  };
};

export default App;
