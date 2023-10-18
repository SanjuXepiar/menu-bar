import React, { useState } from "react";
import "./App.css";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];
function App() {
  const [menuItems, setMenuItems] = useState({ category: "all", items });
  const categories = [...allCategories];

  const filteredItems = (category) => {
    if (category === "all") {
      return setMenuItems({
        category,
        items: [...items],
      });
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems((prev) => {
      return {
        ...prev,
        category,
        items: newItems,
      };
    });
  };
  //    ....
  return (
    <div className="contents">
      <div className="header">
        <h2 style={{ textDecorationLine: "underline" }}>Menu Bar</h2>
        <Categories
          filteredItems={filteredItems}
          categories={categories}
          selectedCategory={menuItems.category}
        />
      </div>

      <div className="mainBody">
        <Menu items={menuItems.items} />
      </div>
    </div>
  );
}

export default App;
